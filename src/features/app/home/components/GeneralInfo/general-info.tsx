import styles from './general-info.module.scss'

interface Props {
  image: string
  fullName: string
  maidenName: string
}

export const GeneralInfo = ({ image, fullName, maidenName }: Props) => {
  return (
    <aside className={styles.container}>
      <img src={image} alt="Avatar" />
      <h5>
        {fullName} ({maidenName})
      </h5>
    </aside>
  )
}
