import { IconType } from 'react-icons'
import { HiUser, HiCreditCard, HiEmojiHappy, HiHeart } from 'react-icons/hi'

const ICON_OPTIONS = ['user', 'wallet', 'health', 'job'] as const
const ICON_MAP: Record<(typeof ICON_OPTIONS)[number], IconType> = {
  user: HiUser,
  wallet: HiCreditCard,
  health: HiHeart,
  job: HiEmojiHappy,
}

interface Props {
  name: (typeof ICON_OPTIONS)[number]
}

export const CardIcon = ({ name }: Props) => {
  const Icon = ICON_MAP[name]

  return <Icon />
}
