import { IUser } from '@models/user/user'
import { formatUserInfo } from '@utils/format/format-user-info/format-user-info'

export namespace IGetUserInfo {
  export type Request = Pick<IUser, 'id'>

  export type Response = IUser

  export type FormattedResponse = ReturnType<typeof formatUserInfo>

  export type State = FormattedResponse
}
