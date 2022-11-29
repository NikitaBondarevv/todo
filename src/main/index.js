import { UserFrom } from '../userForm';
import styles from './styles.css';
import { TaskList } from "../taskList";

export const Main = () => (
  <main className={styles.main}>
    <UserFrom />
    <TaskList />
  </main>
)
