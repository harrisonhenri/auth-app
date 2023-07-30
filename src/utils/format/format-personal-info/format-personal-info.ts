import { IUser } from '@models/user/user'
import { formatDate } from '../format-date/format-date'
import { formatAddress, isAddress } from '../format-address/format-address'

const PERSONAL_INFO_MAP = {
  gender: 'Gênero',
  email: 'E-mail',
  age: 'Idade',
  phone: 'Telefone',
  username: 'Nome de usuário',
  birthDate: 'Data de nascimento',
  university: 'Universidade',
  address: 'Endereço',
  city: 'Cidade',
  postalCode: 'Código postal',
  state: 'Estado',
  lat: 'Latitude',
  lng: 'Longitude',
} as const

type IAddress = IUser['address']

export const formatPersonalInfo = (
  key: keyof typeof PERSONAL_INFO_MAP,
  value: string | IAddress,
) => {
  const label = PERSONAL_INFO_MAP[key]

  if (key === 'birthDate')
    return [{ label, value: formatDate(value as string) }]

  if (isAddress(value)) return formatAddress(value)

  if (key === 'age') return [{ label, value: `${value} anos` }]

  return [{ label, value }]
}

export const isPersonalInfo = (
  key: string,
): key is keyof typeof PERSONAL_INFO_MAP => {
  return Object.keys(PERSONAL_INFO_MAP).includes(key)
}
