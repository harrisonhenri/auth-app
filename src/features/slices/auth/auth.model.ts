import { IUser } from '@models/user/user'

export namespace IAuth {
  export type Request = Pick<IUser, 'username' | 'password'>

  export type Response = Pick<
    IUser,
    'id' | 'username' | 'firstName' | 'lastName' | 'gender' | 'image'
  > & {
    token: string
  }

  export type FormattedResponse = {
    user: IUser
    token: string
  }

  export type State = FormattedResponse
}
