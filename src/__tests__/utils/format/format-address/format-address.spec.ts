import { IUser } from '@models/user/user'
import { userData } from '@tests/mocks/data/user/user'
import { formatAddress } from '@utils/format/format-address/format-address'

describe('formatAddress', () => {
  function buildParameters() {
    const address: IUser['address'] = userData.address

    const expected: ReturnType<typeof formatAddress> = [
      { label: 'Endereço', value: address.address },
      { label: 'Cidade', value: address.city },
      { label: 'Latitude', value: address.coordinates.lat.toString() },
      { label: 'Longitude', value: address.coordinates.lng.toString() },
      { label: 'Código postal', value: address.postalCode },
      { label: 'Estado', value: address.state },
    ]

    return [{ address, expected }]
  }

  it('should format the address correctly', () => {
    buildParameters().map(({ address, expected }) =>
      expect(formatAddress(address)).toEqual(expected),
    )
  })
})
