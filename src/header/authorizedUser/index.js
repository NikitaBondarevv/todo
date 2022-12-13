import { useState, useEffect } from 'react'
import { checkUser } from '../../contracts/checkUser'

import styles from './styles.css'

export const AuthorizedUser = () => {
  const [user, setUser] = useState('')

  useEffect(() => {
    const getName = async () => {
      setUser(await checkUser())
    }

    getName()
  }, [])

  return (
    <div className={styles.user}>
      <a className={styles.userName} href="#">
        {user.firstName}
      </a>
      <div className={styles.menu}>
        <a href="#">Progile</a>
        <a href="#">Log out</a>
      </div>
    </div>
  )
}
