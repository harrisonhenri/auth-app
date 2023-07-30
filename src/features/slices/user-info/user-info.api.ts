import { baseApi } from '@services/http/axios'
import { IGetUserInfo } from './user-info.model'
import { formatUserInfo } from '@utils/format/format-user-info/format-user-info'

export const userInfo = baseApi.injectEndpoints({
  endpoints(builder) {
    return {
      // Ideally, this query wouldn't be necessary (auth could already return the entire user's profile) or done only using the user's session (without the id).
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
