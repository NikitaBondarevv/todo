import { Link } from 'react-router-dom'

import { logout } from 'contracts/logout'
import styles from './styles.css'
import { useAppDispatch, useAppSelector } from 'store'
import { logout as logoutAction} from 'store/user'

export const AuthorizedUser = () => {
  const user = useAppSelector((state) => state.user.data)
  const dispatch = useAppDispatch()

  const logoutHandler = async () => {
    await logout()

    dispatch(logoutAction())
  }

  return (
    <div className={styles.menu}>
      <Link to="/" className={styles.userName}>
        {user?.firstName}
      </Link>
      <ul className={styles.dropDown}>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link onClick={logoutHandler} to="/">Log out</Link>
        </li>
      </ul>
    </div>
  )
}
