import { useContext } from 'react'

import { ContextUser } from '../../..'
import styles from './styles.css'

export const AuthorizedUser = () => {
  const { user } = useContext(ContextUser)

  return (
    <div className={styles.user}>
      <a className={styles.userName} href="#">
        {user?.firstName}
      </a>
      <div className={styles.menu}>
        <a href="#">Progile</a>
        <a href="#">Log out</a>
      </div>
    </div>
  )
}
