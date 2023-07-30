import { userData } from '@tests/mocks/data/user/user'
import { formatPersonalInfo } from '@utils/format/format-personal-info/format-personal-info'

describe('formatPersonalInfo', () => {
  function buildParameters() {
    const personalInfo1 = { key: 'address', value: userData.address }
    const personalInfo2 = { key: 'gender', value: userData.gender }
    const personalInfo3 = { key: 'email', value: userData.email }
    const personalInfo4 = { key: 'age', value: userData.age }
    const personalInfo5 = { key: 'phone', value: userData.phone }
    const personalInfo6 = { key: 'username', value: userData.username }
    const personalInfo7 = { key: 'birthDate', value: '1996-12-30' }
    const personalInfo8 = { key: 'university', value: userData.university }

    const expected1: ReturnType<typeof formatPersonalInfo> = [
      { label: 'Endereço', value: personalInfo1.value.address },
      { label: 'Cidade', value: personalInfo1.value.city },
      {
        label: 'Latitude',
        value: personalInfo1.value.coordinates.lat.toString(),
      },
      {
        label: 'Longitude',
        value: personalInfo1.value.coordinates.lng.toString(),
      },
      { label: 'Código postal', value: personalInfo1.value.postalCode },
      { label: 'Estado', value: personalInfo1.value.state },
    ]
    const expected2: ReturnType<typeof formatPersonalInfo> = [
      { label: 'Gênero', value: personalInfo2.value },
    ]
    const expected3: ReturnType<typeof formatPersonalInfo> = [
      { label: 'E-mail', value: personalInfo3.value },
    ]
    const expected4: ReturnType<typeof formatPersonalInfo> = [
      { label: 'Idade', value: `${personalInfo4.value} anos` },
    ]
    const expected5: ReturnType<typeof formatPersonalInfo> = [
      { label: 'Telefone', value: personalInfo5.value },
    ]
    const expected6: ReturnType<typeof formatPersonalInfo> = [
      { label: 'Nome de usuário', value: personalInfo6.value },
    ]
    const expected7: ReturnType<typeof formatPersonalInfo> = [
      { label: 'Data de nascimento', value: '30/12/1996' },
    ]
    const expected8: ReturnType<typeof formatPersonalInfo> = [
      { label: 'Universidade', value: personalInfo8.value },
    ]

    return [
      { personalInfo: personalInfo1, expected: expected1 },
      { personalInfo: personalInfo2, expected: expected2 },
      { personalInfo: personalInfo3, expected: expected3 },
      { personalInfo: personalInfo4, expected: expected4 },
      { personalInfo: personalInfo5, expected: expected5 },
      { personalInfo: personalInfo6, expected: expected6 },
      { personalInfo: personalInfo7, expected: expected7 },
      { personalInfo: personalInfo8, expected: expected8 },
    ]
  }

  it('should format the personal info correctly', () => {
    buildParameters().map(({ personalInfo, expected }) =>
      expect(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatPersonalInfo(personalInfo.key as any, personalInfo.value as any),
      ).toEqual(expected),
    )
  })
})
