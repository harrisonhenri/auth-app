import { IUser } from '@models/user/user'
import { faker } from '@faker-js/faker'

export const userData: Partial<IUser> = {
  username: faker.internet.userName(),
  password: faker.internet.password(),
}
