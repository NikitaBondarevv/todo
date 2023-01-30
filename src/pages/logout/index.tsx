import { useEffect, useState } from 'react'

import { useAppDispatch } from 'store'
import { logout } from 'contracts/logout'
import { logout as logoutAction} from 'store/user'
import styles from './styles.css'


export const Logout = () => {
  const dispatch = useAppDispatch()
  const [error, setError] = useState('')

  const logoutHandler = async () => {
    try {
      await logout()
      dispatch(logoutAction())
    } catch (error) {
      setError('something went wrong, please try leater!')
    }
  }
  
  useEffect(() => {
    logoutHandler()
  }, [])

  return (
    <div className={styles.logout}>
      <span>
        User is signing out...
        <span className={styles.error}>
          {error}
        </span>
      </span>
    </div>
  )
}
