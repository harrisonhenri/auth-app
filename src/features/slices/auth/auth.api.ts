import { baseQuery } from '@services/http/api'
import { IAuth } from './auth.model'
import { createApi } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: baseQuery(),
  endpoints(builder) {
    return {
      signIn: builder.mutation<IAuth.FormattedResponse, IAuth.Request>({
        query: body => {
          return {
            url: 'auth/login',
            method: 'POST',
            body,
          }
        },
        transformResponse: ({ token, ...rest }: IAuth.Response) => {
          return {
            token,
            user: rest as IAuth.FormattedResponse['user'],
          }
        },
      }),
    }
  },
})

export const { useSignInMutation } = authApi
