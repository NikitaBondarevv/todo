import { useContext } from 'react'

import { AuthorizedUser } from './authorizedUser'
import { ContextUser } from '../../../index'
import styles from './styles.css'
import logo from './images/logo.png'

export const Header = () => {
  const links = [
    { text: 'Home', value: 'home' },
    { text: 'Task list', value: 'taskList' },
    { text: 'Contacts', value: 'contacts' }
  ]

  const { isAuthenticated } = useContext(ContextUser)

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <nav>
        <ul className={styles.list}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={`/${link.value}`} className={styles[`${link.value}`]}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      {
        isAuthenticated
          ? <AuthorizedUser />
          : <a className={styles.createUser} href="/createUser">Create User</a>
      }
    </header>
  )
}