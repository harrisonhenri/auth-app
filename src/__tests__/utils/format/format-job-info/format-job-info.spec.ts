import { IUser } from '@models/user/user'
import { userData } from '@tests/mocks/data/user/user'
import { formatJobInfo } from '@utils/format/format-job-info/format-job-info'

describe('formatJobInfo', () => {
  function buildParameters() {
    const company: IUser['company'] = userData.company

    const expected: ReturnType<typeof formatJobInfo> = [
      { label: 'Endereço', value: company.address.address },
      { label: 'Cidade', value: company.address.city },
      { label: 'Latitude', value: company.address.coordinates.lat.toString() },
      { label: 'Longitude', value: company.address.coordinates.lng.toString() },
      { label: 'Código postal', value: company.address.postalCode },
      { label: 'Estado', value: company.address.state },
      { label: 'Departamento', value: company.department },
      { label: 'Nome', value: company.name },
      { label: 'Função', value: company.title },
    ]

    return [{ company, expected }]
  }

  it('should format the job info correctly', () => {
    buildParameters().map(({ company, expected }) =>
      expect(formatJobInfo(company)).toEqual(expected),
    )
  })
})
