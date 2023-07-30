import { FaSignOutAlt, FaBars, FaAngleLeft } from 'react-icons/fa'
import styles from './navbar.module.scss'
import { useAppDispatch } from '@store/store'
import { signOut } from '@slices/auth/auth.slice'
import { useNavigate } from 'react-router-dom'
import { pages } from '@routes/routes.model'

interface Props {
  visible?: boolean
  toogleVisibility(): void
}

export const Navbar = ({ visible, toogleVisibility }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function handleNavigation(path: string) {
    navigate(path)
  }

  function handleLogout() {
    dispatch(signOut())
    handleNavigation('/')
  }

  return (
    <>
      <button className={styles.burger} onClick={() => toogleVisibility()}>
        <FaBars size={24} />
      </button>
      <nav data-status={visible ? 'show' : 'hide'}>
        {visible && (
          <button className={styles['navbar__hide']} onClick={toogleVisibility}>
            <FaAngleLeft />
          </button>
        )}
        {pages
          .filter(item => item.isPrivate)
          .map(({ path, Icon }) => (
            <button key={path} onClick={() => handleNavigation(path)}>
              <Icon />
              <span>Home</span>
            </button>
          ))}

        <button onClick={handleLogout}>
          <FaSignOutAlt />
          <span>Sair</span>
        </button>
      </nav>
    </>
  )
}
