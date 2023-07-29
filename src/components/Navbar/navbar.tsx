import { FaThLarge, FaSignOutAlt, FaBars, FaAngleLeft } from 'react-icons/fa'
import styles from './navbar.module.scss'

interface Props {
  visible?: boolean
  toogleVisibility(): void
}

export const Navbar = ({ visible, toogleVisibility }: Props) => {
  return (
    <>
      <button className={styles.burger} onClick={() => toogleVisibility()}>
        <FaBars size={24} />
      </button>
      <nav data-status={visible ? 'show' : 'hide'}>
        {visible && (
          <button className={styles['navbar__hide']} onClick={toogleVisibility}>
            <FaAngleLeft size={30} />
          </button>
        )}
        <button>
          <FaThLarge size={20} />
          <span>Home</span>
        </button>

        <button>
          <FaSignOutAlt size={20} />
          <span>Sair</span>
        </button>
      </nav>
    </>
  )
}
