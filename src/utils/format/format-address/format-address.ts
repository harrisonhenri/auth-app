import { IUser } from '@models/user/user'

const ADDRESS_INFO_MAP = {
  address: 'Endereço',
  city: 'Cidade',
  postalCode: 'Código postal',
  state: 'Estado',
  lat: 'Latitude',
  lng: 'Longitude',
} as const

type IAddress = IUser['address']
type ICoordinate = IAddress['coordinates']

export const formatAddress = (address: IAddress) => {
  return (
    Object.entries(address) as [
      keyof typeof ADDRESS_INFO_MAP,
      string | ICoordinate,
    ][]
  )
    .map(([key, value]) => {
      if (isCoordinate(value))
        return [
          { label: ADDRESS_INFO_MAP['lat'], value: value.lat.toString() },
          { label: ADDRESS_INFO_MAP['lng'], value: value.lng.toString() },
        ]

      const label = ADDRESS_INFO_MAP[key]

      return [{ label, value }]
    })
    .flat()
}

const isCoordinate = (value: string | ICoordinate): value is ICoordinate => {
  return typeof value !== 'string'
}

export const isAddress = (
  value: string | number | IAddress,
): value is IAddress => {
  return typeof value !== 'string' && typeof value !== 'number'
}
