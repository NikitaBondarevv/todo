import { Link } from 'react-router-dom'

import styles from './styles.css'

export const NotLoggedIn = () => (
  <div className={styles.content}>
    <p>
      You need to register or login to your account
    </p>
    <div className={styles.links}>
      <Link to="/" className={styles.link}>Go to login</Link>
      <Link to="/create" className={styles.link}>Go to register</Link>
    </div>
  </div>
)
