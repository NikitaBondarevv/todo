import { Link, NavLink } from 'react-router-dom'

import { useAppSelector } from 'store'
import { navigation, notLoggedNavigation } from 'helpers/constans'
import { AuthorizedUser } from './authorizedUser'
import styles from './styles.css'
import logo from './images/logo.png'

const getNavLinkName = (isActive: boolean, value: string = '') => {
  const activeClassName = isActive ? styles.active : ''

  return `${value} ${activeClassName}`
}

export const Header = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        {
          isAuthenticated
            ? (
              <ul className={styles.list}>
                {navigation.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/${link.value}`}
                      className={({ isActive }) => getNavLinkName(isActive, styles[link.value])}
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )
            : (
              <ul className={styles.list}>
                {notLoggedNavigation.map((link, index) => (
                  <li key={index}>
                    <NavLink
                      to={`/${link.value}`}
                      className={({ isActive }) => getNavLinkName(isActive, styles[link.value])}
                    >
                      {link.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )
        }
      </nav>
      {
        isAuthenticated
          ? <AuthorizedUser />
          : (
            <NavLink
              to="/create"
              className={({ isActive }) => getNavLinkName(isActive, styles.createUser)}
            >
              Create User
            </NavLink>
          )
      }
    </header>
  )
}
