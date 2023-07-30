import { userData } from '@tests/mocks/data/user/user'
import { formatUserInfo } from '@utils/format/format-user-info/format-user-info'

describe('formatPhysicalInfo', () => {
  function buildParameters() {
    const data = {
      ...userData,
      birthDate: '1996-12-30',
      bank: {
        ...userData.bank,
        cardExpire: '05/22',
        iban: 'GB94 MOIU 1274 8449 9733 05',
        cardNumber: '5602214306858976',
      },
    }

    const expected = {
      image: data.image,
      fullName: `${data.firstName} ${data.lastName}`,
      id: data.id,
      maidenName: data.maidenName,
      personalInfo: [
        {
          label: 'Idade',
          value: `${data.age} anos`,
        },
        {
          label: 'Gênero',
          value: data.gender,
        },
        {
          label: 'E-mail',
          value: data.email,
        },
        {
          label: 'Telefone',
          value: data.phone,
        },
        {
          label: 'Nome de usuário',
          value: data.username,
        },
        {
          label: 'Data de nascimento',
          value: '30/12/1996',
        },
        {
          label: 'Endereço',
          value: data.address.address,
        },
        {
          label: 'Cidade',
          value: data.address.city,
        },
        {
          label: 'Latitude',
          value: data.address.coordinates.lat.toString(),
        },
        {
          label: 'Longitude',
          value: data.address.coordinates.lng.toString(),
        },
        {
          label: 'Código postal',
          value: data.address.postalCode,
        },
        {
          label: 'Estado',
          value: data.address.state,
        },
        {
          label: 'Universidade',
          value: data.university,
        },
      ],
      physicalInfo: [
        {
          label: 'Grupo sanguíneo',
          value: data.bloodGroup,
        },
        {
          label: 'Altura',
          value: `${data.height} cm`,
        },
        {
          label: 'Peso',
          value: `${data.weight} kg`,
        },
        {
          label: 'Cor do olho',
          value: data.eyeColor,
        },
        {
          label: 'Cor do cabelo',
          value: data.hair.color,
        },
        {
          label: 'Tipo do cabelo',
          value: data.hair.type,
        },
      ],
      financialInfo: [
        {
          label: 'Expiração do cartão',
          value: '01/05/2022',
        },
        {
          label: 'Número do cartão',
          value: '************8976',
        },
        {
          label: 'Tipo do cartão',
          value: data.bank.cardType,
        },
        {
          label: 'Moeda',
          value: data.bank.currency,
        },
        {
          label: 'Código',
          value: '***********************3 05',
        },
      ],
      jobInfo: [
        { label: 'Endereço', value: data.company.address.address },
        { label: 'Cidade', value: data.company.address.city },
        {
          label: 'Latitude',
          value: data.company.address.coordinates.lat.toString(),
        },
        {
          label: 'Longitude',
          value: data.company.address.coordinates.lng.toString(),
        },
        { label: 'Código postal', value: data.company.address.postalCode },
        { label: 'Estado', value: data.company.address.state },
        { label: 'Departamento', value: data.company.department },
        { label: 'Nome', value: data.company.name },
        { label: 'Função', value: data.company.title },
      ],
    }

    return [{ data, expected }]
  }

  it('should format the user info correctly', () => {
    buildParameters().map(({ data, expected }) =>
      expect(formatUserInfo(data)).toEqual(expected),
    )
  })
})
