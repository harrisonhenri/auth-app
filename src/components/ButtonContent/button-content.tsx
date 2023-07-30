import styles from './button-content.module.scss'

import { FiLogIn } from 'react-icons/fi'

interface Props {
  text: string
  icon?: boolean
}

export const ButtonContent = ({ text, icon }: Props) => {
  return (
    <div className={styles.container}>
      <p>{text}</p>
      {icon && <FiLogIn data-testid="icon" />}
    </div>
  )
}
