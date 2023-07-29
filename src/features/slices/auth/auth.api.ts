import { baseApi } from '@services/http/api'
import { IAuth } from './auth.model'

export const authApi = baseApi.injectEndpoints({
  endpoints(builder) {
    return {
      signIn: builder.mutation<IAuth.FormattedResponse, IAuth.Request>({
        query: data => {
          return {
            url: 'auth/login',
            method: 'POST',
            data,
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
