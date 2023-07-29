import React from 'react'
import styles from './button.module.scss'
import { Spinner } from '@components/Spinner/spinner'

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean
}

export const Button: React.FC<Props> = ({ children, loading, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {!loading ? children : <Spinner />}
    </button>
  )
}
