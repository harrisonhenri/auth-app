import styles from './snack-bar.module.scss'
import { getStyle } from './utils/get-style/get-style'
import { HiEmojiSad, HiEmojiHappy } from 'react-icons/hi'

interface Props {
  open?: boolean
  text: string
  type: 'success' | 'error'
  id: string
}

export const SnackBar = ({ id, open, text, type }: Props) => {
  const { openClass, variantClass } = getStyle(type, open)

  return (
    <div
      data-testid={id}
      className={`${styles.container} ${styles[openClass]} ${styles[variantClass]}`}
    >
      <p>{text}</p>
      {type === 'success' ? <HiEmojiHappy /> : <HiEmojiSad />}
    </div>
  )
}
