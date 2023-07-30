import styles from './spinner.module.scss'

interface Props {
  variation?: 'secondary' | 'white'
}

export const Spinner = ({ variation = 'white' }: Props) => {
  const classVariation =
    variation === 'secondary'
      ? styles['container--secondary']
      : styles['container--white']

  return (
    <div
      data-testid="spinner"
      className={`${styles.container} ${classVariation}`}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
