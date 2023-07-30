import styles from './snack-bar.module.scss'
import { getStyle } from './utils/get-style/get-style'
import { HiEmojiSad, HiEmojiHappy } from 'react-icons/hi'

interface Props {
  open?: boolean
  text: string
  type: 'success' | 'error'
}

export const SnackBar = ({ open, text, type }: Props) => {
  const { openClass, variantClass } = getStyle(type, open)

  return (
    <div
      data-testid={`${type}-snackbar`}
      className={`${styles.container} ${styles[openClass]} ${styles[variantClass]}`}
    >
      <p>{text}</p>
      {type === 'success' ? (
        <HiEmojiHappy data-testid="success-icon" />
      ) : (
        <HiEmojiSad data-testid="error-icon" />
      )}
    </div>
  )
}
