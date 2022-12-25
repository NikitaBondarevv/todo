import { Link } from 'react-router-dom'

import styles from './styles.css'

export const LinkToMainPage = () => (
  <div className={styles.content}>
    <p>
      Account was seccuesfully created
    </p>
    <p>
      Now you can use your email and<br />
      password to login into profile
    </p>
    <Link to="/login" className={styles.link}>Go to main page</Link>
  </div>
)
