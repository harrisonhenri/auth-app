import notFoundAnimation from '@assets/animations/not-found.json'
import Lottie from 'lottie-react'
import styles from './not-found.module.scss'

export const NotFound = () => (
  <section className={styles.container}>
    <Lottie
      data-testid="not-found-animation"
      animationData={notFoundAnimation}
    />
  </section>
)
