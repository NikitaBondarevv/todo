import { useContext } from 'react'

import { AuthorizedUser } from './authorizedUser'
import { UserContext } from 'contexts/userContext'
import styles from './styles.css'
import logo from './images/logo.png'

export const Header = () => {
  const links = [
    { text: 'Home', value: 'home' },
    { text: 'Task list', value: 'taskList' },
    { text: 'Contacts', value: 'contacts' }
  ]

  const { isAuthenticated } = useContext(UserContext)

  return (
    <header className={styles.header}>
      <a href="/#">
        <img src={logo} alt="logo" />
      </a>
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
