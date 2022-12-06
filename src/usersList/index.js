import styles from './styles.css'
import { User } from './user'

export const UsersList = () => (
  <>
    <ul className={styles.list}>
      <User />
    </ul>
  </>
)
