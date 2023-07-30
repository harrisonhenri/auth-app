import { baseApi } from '@services/http/axios'
import { IGetUserInfo } from './user-info.model'
import { formatUserInfo } from '@utils/format/format-user-info/format-user-info'

export const userInfo = baseApi.injectEndpoints({
  endpoints(builder) {
    return {
      // Idealmente essa consulta seria desnecessária (o auth já poderia retornar todo o perfil do user) ou feita somente utilizando-se a sessão do usuário (sem o id).
      getUserInfo: builder.query<
        IGetUserInfo.FormattedResponse,
        IGetUserInfo.Request
      >({
        query: ({ id }) => {
          const url = `users/${id}`

          return {
            url,
            method: 'GET',
          }
        },
        transformResponse: (response: IGetUserInfo.Response) => {
          return formatUserInfo(response)
        },
      }),
    }
  },
})

export const { useGetUserInfoQuery } = userInfo
