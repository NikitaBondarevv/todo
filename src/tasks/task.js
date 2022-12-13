import PropTypes from 'prop-types'

import styles from './styles.css'
import { getProgressClassName } from './getProgressClassName'
import { updateTask, deleteTask } from '../contracts/tasks'

export const Task = ({ data, getTasks }) => {
  const { done, title } = data

  const completeTask = async () => {
    await updateTask({ ...data, done: true })
    getTasks()
  }
  
  const setInProgress = async () => {
    await updateTask({ ...data, done: undefined })
    getTasks()
  }

  const removeTask = async () => {
    await deleteTask(data)
    getTasks()
  }

  return (
    <li className={getProgressClassName(done)}>
      {title}
      {
        !done && (
          <div className={styles.buttons}>
            <button onClick={completeTask}></button>
            {
              done === undefined ? ''
                : (
                  <button onClick={setInProgress} className={styles.inProgress}></button>
                )
            }
            <button onClick={removeTask} className={styles.delete}></button>
          </div>
        )
      }
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
