import PropTypes from 'prop-types'

import styles from './styles.css'
import { getProgressClassName } from './getProgressClassName'
import { updateTask } from '../contracts/tasks'

export const Task = ({ data, index, getTasks }) => {
  const { done, title } =  data
  const completeTask = async () => {
    await updateTask({ ...data, done: true })
    getTasks()
  }

  return (
    <li className={done ? styles.done : styles.tasks}>
      <span className={getProgressClassName(done)} />
      <p className={done === undefined ? styles.taskInProgress : ''}>{`${index}. ${title}`}</p>
      <div className={styles.buttons}>
        <a onClick={completeTask}>done</a>
        {
          done === undefined ? '' :
            <a onClick={() => this.setInProgressTask(index)} className={styles.inProgress}>
              in progress
            </a>
        }
        <a onClick={() => this.deleteTask(task.id)} className={styles.delete}>delete</a>
      </div>
    </li>
  )
}

Task.defaultProps = {
  title: '',
  index: 0,
  done: undefined,
}

Task.propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
  done: PropTypes.bool
}
