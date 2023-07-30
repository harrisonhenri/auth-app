import { userData } from '@tests/mocks/data/user/user'
import { formatPhysicalInfo } from '@utils/format/format-physical-info/format-physical-info'

describe('formatPhysicalInfo', () => {
  function buildParameters() {
    const physicalInfo1 = { key: 'bloodGroup', value: userData.bloodGroup }
    const physicalInfo2 = { key: 'weight', value: userData.weight }
    const physicalInfo3 = { key: 'height', value: userData.height }
    const physicalInfo4 = { key: 'eyeColor', value: userData.eyeColor }
    const physicalInfo5 = { key: 'hair', value: userData.hair }

    const expected1: ReturnType<typeof formatPhysicalInfo> = [
      { label: 'Grupo sanguíneo', value: physicalInfo1.value },
    ]
    const expected2: ReturnType<typeof formatPhysicalInfo> = [
      { label: 'Peso', value: `${physicalInfo2.value} kg` },
    ]
    const expected3: ReturnType<typeof formatPhysicalInfo> = [
      { label: 'Altura', value: `${physicalInfo3.value} cm` },
    ]
    const expected4: ReturnType<typeof formatPhysicalInfo> = [
      { label: 'Cor do olho', value: physicalInfo4.value },
    ]
    const expected5: ReturnType<typeof formatPhysicalInfo> = [
      { label: 'Cor do cabelo', value: physicalInfo5.value.color },
      { label: 'Tipo do cabelo', value: physicalInfo5.value.type },
    ]

    return [
      { physicalInfo: physicalInfo1, expected: expected1 },
      { physicalInfo: physicalInfo2, expected: expected2 },
      { physicalInfo: physicalInfo3, expected: expected3 },
      { physicalInfo: physicalInfo4, expected: expected4 },
      { physicalInfo: physicalInfo5, expected: expected5 },
    ]
  }

  it('should format the physical info correctly', () => {
    buildParameters().map(({ physicalInfo, expected }) =>
      expect(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatPhysicalInfo(physicalInfo.key as any, physicalInfo.value as any),
      ).toEqual(expected),
    )
  })
})
