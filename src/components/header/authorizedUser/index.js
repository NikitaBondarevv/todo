import { useContext } from 'react'

import { ContextUser } from '../../../../index'
import styles from './styles.css'

export const AuthorizedUser = () => {
  const { user } = useContext(ContextUser)

  return (
    <div className={styles.user}>
      <a className={styles.userName} href="#">
        {user?.firstName}
      </a>
      <div className={styles.menu}>
        <a href="#">Profile</a>
        <a href="#">Log out</a>
      </div>
    </div>
  )
}
