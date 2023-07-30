import {
  BaseQueryFn,
  FetchBaseQueryError,
  createApi,
} from '@reduxjs/toolkit/query/react'
import { AxiosError, AxiosRequestConfig } from 'axios'

import { RootState } from '@store/store'

import { isTokenExpired } from '@utils/http/is-token-expired/is-token-expired'
import { ServiceError } from '@models/service-error/service-error'
import { signOut, updateSession } from '@slices/auth/auth.slice'
import { api, baseQuery } from './api'

const axiosBaseQuery: BaseQueryFn<
  {
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
  },
  unknown,
  ServiceError | undefined | FetchBaseQueryError
> = async (args, baseQueryApi, extraOptions) => {
  const { token, user } = (baseQueryApi.getState() as RootState).authSlice

  try {
    const result = await api.request({
      ...args,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return { data: result.data }
  } catch (axiosError) {
    const err = axiosError as AxiosError

    // Esse trecho tem como objetivo simular algo que idealmente seria feito utilizando-se um refresh token.
    if (isTokenExpired(token)) {
      try {
        const response = await api.post('auth/login', {
          username: user.username,
          password: user.password,
        })

        const { token } = response.data

        baseQueryApi.dispatch(updateSession({ token }))

        const result = await baseQuery(token)(args, baseQueryApi, extraOptions)

        return result
      } catch {
        baseQueryApi.dispatch(signOut())
      }
    }

    const errorData = err.response?.data || err.message

    const error = {
      status: err.response?.status,
      data: typeof errorData === 'string' ? { message: errorData } : errorData,
    } as ServiceError

    return {
      error,
    }
  }
}

export const baseApi = createApi({
  reducerPath: 'api',
  endpoints: () => ({}),
  baseQuery: axiosBaseQuery,
})
