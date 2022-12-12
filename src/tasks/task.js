import PropTypes from 'prop-types'

import styles from './styles.css'
import { getProgressClassName } from './getProgressClassName'
import { updateTask } from '../contracts/tasks'

export const Task = ({ data, getTasks }) => {
  const { done, title } = data
  const completeTask = async () => {
    await updateTask({ ...data, done: true })
    getTasks()
  }

  return (
    <li className={getProgressClassName(done)}>
      {title}
      {
        !done && (
          <div className={styles.buttons}>
            <a onClick={completeTask}>done</a>
            {
              done === undefined ? ''
                : (
                  <a className={styles.inProgress}>
                    in progress
                  </a>
                )
            }
            <a className={styles.delete}>delete</a>
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
