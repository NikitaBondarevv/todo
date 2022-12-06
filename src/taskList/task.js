import styles from './styles.css'

export const Task = ({ index, done, title, buttons }) => (
  <li className={done ? styles.done : styles.tasks}>
    <span className={done ? styles.done : done === undefined ? styles.progress : styles.waiting}></span>
    <p className={done === undefined ? styles.taskInProgress : ''}>{`${index}. ${title}`}</p>
    {buttons}
  </li>
)
