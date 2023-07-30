import { IUser } from '@models/user/user'

const PHYSICAL_INFO_MAP = {
  bloodGroup: 'Grupo sanguíneo',
  weight: 'Peso',
  height: 'Altura',
  eyeColor: 'Cor do olho',
  color: 'Cor do cabelo',
  type: 'Tipo do cabelo',
  hair: '',
} as const

type IHair = IUser['hair']

export const formatPhysicalInfo = (
  key: keyof typeof PHYSICAL_INFO_MAP,
  value: string | number | IHair,
) => {
  if (isHair(value))
    return [
      { label: PHYSICAL_INFO_MAP['color'], value: value.color },
      { label: PHYSICAL_INFO_MAP['type'], value: value.type },
    ]

  const label = PHYSICAL_INFO_MAP[key]

  if (key === 'height') return [{ label, value: `${value} cm` }]

  if (key === 'weight') return [{ label, value: `${value} kg` }]

  return [{ label, value }]
}

const isHair = (value: string | number | IHair): value is IHair => {
  return typeof value !== 'string' && typeof value !== 'number'
}

export const isPhysicalInfo = (
  key: string,
): key is keyof typeof PHYSICAL_INFO_MAP => {
  return Object.keys(PHYSICAL_INFO_MAP).includes(key)
}
