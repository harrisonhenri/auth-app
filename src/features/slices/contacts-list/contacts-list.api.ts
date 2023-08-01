import { baseApi } from '@services/http/axios'
import { IContactsList } from './contacts-list.model'
import { formatContactsList } from '@utils/format/format-contacts-list/format-contacts-list'

export const contactsList = baseApi.injectEndpoints({
  endpoints(builder) {
    return {
      searchContact: builder.query<
        IContactsList.FormattedResponse,
        IContactsList.Request
      >({
        query: ({ name }) => {
          const url = `users/search/?q=${name}`

          return {
            url,
            method: 'GET',
          }
        },
        transformResponse: (response: IContactsList.Response) => {
          return formatContactsList(response.users)
        },
      }),
    }
  },
})

export const { useLazySearchContactQuery } = contactsList
