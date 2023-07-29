import { forwardRef } from 'react'
import styles from './input.module.scss'
import { getInputDataStatus } from './utils/get-input-data-status'

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  errorMessage?: string
  touched?: boolean
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ errorMessage, touched, ...props }, ref) => {
    const status = getInputDataStatus(touched, errorMessage)

    return (
      <div
        data-testid={`${props.name}-container`}
        className={styles.container}
        data-status={status}
      >
        <input {...props} ref={ref} placeholder=" " data-testid={props.name} />
        <label data-testid={`${props.name}-label`} title={errorMessage}>
          {props.placeholder}
        </label>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    )
  },
)
