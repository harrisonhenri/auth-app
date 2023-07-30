import { IUser } from '@models/user/user'
import { formatAddress, isAddress } from '../format-address/format-address'

const JOB_INFO_MAP = {
  department: 'Departamento',
  name: 'Nome',
  title: 'Função',
  address: 'Endereço',
  city: 'Cidade',
  postalCode: 'Código postal',
  state: 'Estado',
  lat: 'Latitude',
  lng: 'Longitude',
} as const

type IAddress = IUser['address']
type IJob = IUser['company']

export const formatJobInfo = (jobInfo: IJob) => {
  return (Object.entries(jobInfo) as [keyof IJob, string | IAddress][])
    .map(([key, value]) => {
      const label = JOB_INFO_MAP[key]

      if (isAddress(value)) return formatAddress(value)

      return [{ label, value }]
    })
    .flat()
}

export const isJobInfo = (key: string) => {
  return key === 'company'
}
