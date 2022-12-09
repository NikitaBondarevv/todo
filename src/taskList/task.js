import PropTypes from 'prop-types'

import styles from './styles.css'

export const Task = ({ index, done, title, children }) => (
  <li className={done ? styles.done : styles.tasks}>
    <span className={done ? styles.done : done === undefined ? styles.progress : styles.waiting} />
    <p className={done === undefined ? styles.taskInProgress : ''}>{`${index}. ${title}`}</p>
    {children}
  </li>
)

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
