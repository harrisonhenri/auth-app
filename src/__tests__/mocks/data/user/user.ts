import { faker } from '@faker-js/faker'
import { IUser } from '@models/user/user'

export const userData: IUser = {
  id: faker.number.int(100),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  maidenName: faker.person.firstName(),
  age: faker.number.int(100),
  gender: faker.word.noun(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  username: faker.internet.userName(),
  password: faker.internet.password(),
  birthDate: '1989-10-15',
  image: faker.image.avatar(),
  bloodGroup: 'A−',
  height: faker.number.int(100),
  weight: faker.number.float(),
  eyeColor: faker.color.human(),
  hair: {
    color: faker.word.noun(),
    type: faker.word.noun(),
  },
  domain: faker.internet.domainName(),
  ip: faker.internet.ipv4(),
  address: {
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    coordinates: {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    },
    postalCode: faker.location.zipCode(),
    state: faker.location.state(),
  },
  macAddress: faker.internet.mac(),
  university: faker.company.name(),
  bank: {
    cardExpire: '05/22',
    cardNumber: faker.finance.creditCardNumber(),
    cardType: faker.finance.transactionType(),
    currency: faker.finance.currency().name,
    iban: faker.finance.iban(),
  },
  company: {
    address: {
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      coordinates: {
        lat: faker.location.latitude(),
        lng: faker.location.longitude(),
      },
      postalCode: faker.location.zipCode(),
      state: faker.location.state(),
    },
    department: faker.company.buzzNoun(),
    name: faker.company.name(),
    title: faker.company.buzzNoun(),
  },
  ein: '53-7190545',
  ssn: '809-93-2422',
  userAgent: faker.internet.userAgent(),
}
