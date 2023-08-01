import { faker } from '@faker-js/faker'
import { IContact } from '@models/contact/contact'

export const contactData: IContact = {
  id: faker.number.int(100),
  fullName: faker.person.fullName(),
  image: faker.image.avatar(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  companyName: faker.company.name(),
}
