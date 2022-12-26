import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { UserContext } from 'contexts/userContext'
import { AuthorizedUser } from './authorizedUser'
import { links } from 'helpers/constans'
import styles from './styles.css'
import logo from './images/logo.png'

const getNavLinkName = (isActive: boolean, value: string = '') => {
  const activeClassName = isActive ? styles.active : ''

  return `${value} ${activeClassName}`
}

export const Header = () => {
  const { isAuthenticated } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
        <ul className={styles.list}>
          {links.map((link, index) => (
            <li key={index}>
              <NavLink to={`/${link.value}`} className={({ isActive }) => getNavLinkName(isActive, styles[link.value])}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {
        isAuthenticated
          ? <AuthorizedUser />
          : <NavLink to='/create' className={({ isActive }) => getNavLinkName(isActive, styles.createUser)}>Create User</NavLink>
      }
    </header>
  )
}
