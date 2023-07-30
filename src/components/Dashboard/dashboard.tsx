import { ReactNode, useState } from 'react'
import styles from './dashboard.module.scss'
import { Navbar } from '@components/Navbar/navbar'

interface Props {
  children: ReactNode
}

export const Dashboard = ({ children }: Props) => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false)

  function toogleNavBarVisible() {
    setIsNavBarVisible(!isNavBarVisible)
  }

  return (
    <section className={styles.container}>
      <Navbar
        visible={isNavBarVisible}
        toogleVisibility={toogleNavBarVisible}
      />
      <section className={styles.content}>{children}</section>
    </section>
  )
}
