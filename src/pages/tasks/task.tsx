import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { updateTask, deleteTask } from 'contracts/tasks'
import { getProgressClassName } from './getProgressClassName'
import { TTaskProps } from './types'
import styles from './styles.css'

export const Task = ({ data, getTasks }: TTaskProps) => {  
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
      &nbsp;
      <Link to={`/task/${data.day}/${data.id}`}>{title}</Link>
      {
        !done && (
          <div className={styles.buttons}>
            <button onClick={completeTask} type="button" />
            {
              done !== undefined && (
                  <button onClick={setInProgress} className={styles.inProgress} type="button" />
                )
            }
            <button onClick={removeTask} className={styles.delete} type="button" />
          </div>
        )
      }
    </li>
  )
}

Task.defaultProps = {
  data: {},
}

Task.propTypes = {
  data: PropTypes.object,
  getTasks: PropTypes.func
}
