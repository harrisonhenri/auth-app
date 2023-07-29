import styles from './button-text.module.scss'

import { FiLogIn } from 'react-icons/fi'

interface Props {
  text: string
  icon?: boolean
}

export const ButtonText = ({ text, icon }: Props) => {
  return (
    <div className={styles.button__text}>
      <p>{text}</p>
      {icon && <FiLogIn />}
    </div>
  )
}
