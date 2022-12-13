import { useState, useEffect } from 'react'
import { checkUser } from '../../contracts/checkUser'

import styles from './styles.css'

export const AuthorizedUser = () => {
  const [show, setShow] = useState(false)
  const [user, setUser] = useState('')

  useEffect(() => {
    const getName = async () => {
      setUser(await checkUser())
    }

    getName()
  }, [])

  return (
    <div className={styles.user} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
      <a className={styles.userName} href="#">
        {user.firstName}
      </a>
      {
        show
        && (
          <div className={styles.hoverMenu}>
            <a href="#">Progile</a>
            <a href="#">Log out</a>
          </div>
        )
      }
    </div>
  )
}
