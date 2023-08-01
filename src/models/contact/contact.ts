import { IUser } from '@models/user/user'

export type IContact = Pick<IUser, 'id' | 'phone' | 'email' | 'image'> & {
  fullName: string
  companyName: string
}
