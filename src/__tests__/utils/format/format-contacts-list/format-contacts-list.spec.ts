import { userData } from '@tests/mocks/data/user/user'
import { formatContactsList } from '@utils/format/format-contacts-list/format-contacts-list'

describe('formatContactsList', () => {
  function buildParameters() {
    const data = [userData]

    const expected = {
      contactsList: [
        {
          id: userData.id,
          fullName: `${userData.firstName} ${userData.lastName}`,
          phone: userData.phone,
          image: userData.image,
          companyName: userData.company.name,
          email: userData.email,
        },
      ],
    }

    return [{ data, expected }]
  }

  it('should format the contacts list correctly', () => {
    buildParameters().map(({ data, expected }) =>
      expect(formatContactsList(data)).toEqual(expected),
    )
  })
})
