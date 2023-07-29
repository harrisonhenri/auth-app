import styles from './spinner.module.scss'

export const Spinner = () => {
  return (
    <div data-testid="spinner" className={styles.container}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
