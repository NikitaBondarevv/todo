import { useContext } from 'react'

import { ContextUser } from '../../../../index'
import { logout } from '../../../contracts/logout'
import styles from './styles.css'

export const AuthorizedUser = () => {
  const { user, setUser } = useContext(ContextUser)

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
          <a href="/#">Profile</a>
        </li>
        <li>
          <a onClick={logoutHandler} href="/#">Log out</a>
        </li>
      </ul>
    </div>
  )
}
