import { useContext } from 'react'

import { UserContext } from 'contexts/userContext'
import { logout } from 'contracts/logout'
import styles from './styles.css'

export const AuthorizedUser = () => {
  const { user, setUser } = useContext(UserContext)

  const logoutHandler = async () => {
    await logout()

    setUser()
  }

  return (
    <div className={styles.menu}>
      <a href="/#" className={styles.userName}>
        {user?.firstName}
      </a>
      <ul className={styles.dropDown}>
        <li>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a onClick={logoutHandler} href="/#">Log out</a>
        </li>
      </ul>
    </div>
  )
}
