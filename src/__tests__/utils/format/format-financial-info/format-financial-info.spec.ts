import { IUser } from '@models/user/user'
import { userData } from '@tests/mocks/data/user/user'
import { formatFinancialInfo } from '@utils/format/format-financial-info/format-financial-info'
import { formatSensitiveFinancialInfo } from '@utils/format/format-sensitive-financial-info/format-sensitive-financial-info'

describe('formatFinancialInfo', () => {
  function buildParameters() {
    const financial: IUser['bank'] = { ...userData.bank, cardExpire: '05/22' }

    const expected: ReturnType<typeof formatFinancialInfo> = [
      { label: 'Expiração do cartão', value: '01/05/2022' },
      {
        label: 'Número do cartão',
        value: formatSensitiveFinancialInfo(financial.cardNumber),
      },
      { label: 'Tipo do cartão', value: financial.cardType },
      { label: 'Moeda', value: financial.currency },
      {
        label: 'Código',
        value: formatSensitiveFinancialInfo(financial.iban),
      },
    ]

    return [{ financial, expected }]
  }

  it('should format the financial info correctly', () => {
    buildParameters().map(({ financial, expected }) =>
      expect(formatFinancialInfo(financial)).toEqual(expected),
    )
  })
})
