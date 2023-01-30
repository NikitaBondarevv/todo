import { Link } from 'react-router-dom'

import styles from './styles.css'
import { useAppSelector } from 'store'

export const AuthorizedUser = () => {
  const user = useAppSelector((state) => state.user.data)

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
          <Link to="/logout">Log out</Link>
        </li>
      </ul>
    </div>
  )
}
