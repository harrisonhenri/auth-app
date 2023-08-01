import { IUser } from '@models/user/user'
import { formatContactsList } from '@utils/format/format-contacts-list/format-contacts-list'

export namespace IContactsList {
  export type Request = {
    name: string
  }

  export type Response = {
    users: IUser[]
  }

  export type FormattedResponse = ReturnType<typeof formatContactsList>

  export type State = FormattedResponse
}
