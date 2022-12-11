import PropTypes from 'prop-types'

import styles from './styles.css'

const getProgressClassName = (done) => {
  if (done) return styles.done

  if (done === undefined) return styles.progress

  return styles.waiting
}

export const Task = ({ index, done, title, children }) => (
  <li className={done ? styles.done : styles.tasks}>
    <span className={getProgressClassName()} />
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
