import { CreateUser } from './createUser'
import { AuthorizedUser } from './authorizedUser'
import { ContextUser } from '../../index'
import styles from './styles.css'
import logo from './images/logo.png'

export const Header = () => {
  const links = [
    { text: 'Home', value: 'home' },
    { text: 'Task list', value: 'taskList' },
    { text: 'Contacts', value: 'contacts' }
  ]

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <nav>
        <ul className={styles.list}>
          {links.map((link, index) => (
            <li key={index}>
              <a href="#" className={styles[`${link.value}`]}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ContextUser.Consumer>
        {
          ({ isAuthenticated }) => (
            isAuthenticated
              ? <AuthorizedUser />
              : <CreateUser />
          )
        }
      </ContextUser.Consumer>
    </header>
  )
}
