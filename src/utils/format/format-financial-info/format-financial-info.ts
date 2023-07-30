import { IUser } from '@models/user/user'
import { formatSensitiveFinancialInfo } from '../format-sensitive-financial-info/format-sensitive-financial-info'
import { formatDate } from '../format-date/format-date'

const FINANCIAL_INFO_MAP = {
  cardExpire: 'Expiração do cartão',
  cardNumber: 'Número do cartão',
  cardType: 'Tipo do cartão',
  currency: 'Moeda',
  iban: 'Código',
} as const

type IBank = IUser['bank']

export const formatFinancialInfo = (financialInfo: IBank) => {
  return (Object.entries(financialInfo) as [keyof IBank, string][]).map(
    ([key, value]) => {
      const label = FINANCIAL_INFO_MAP[key]

      if (isSensitiveInfo(key))
        return { label, value: formatSensitiveFinancialInfo(value) }

      if (isExpirationDate(key))
        return { label, value: formatExpirationDate(value) }

      return { label, value }
    },
  )
}

const isSensitiveInfo = (key: string) => {
  return key === 'iban' || key === 'cardNumber'
}

const isExpirationDate = (key: string) => {
  return key === 'cardExpire'
}

const formatExpirationDate = (value: string) => {
  const [month, year] = value.split('/')
  const date = `20${year}-${month}-01`

  return formatDate(date)
}

export const isFinancialInfo = (key: string) => {
  return key === 'bank'
}
