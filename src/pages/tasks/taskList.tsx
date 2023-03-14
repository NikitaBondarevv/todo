import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Task } from './task'
import { TTaskListProps } from './types'
import styles from './styles.css'

export const TaskList = ({ tasks, getTasks, activeTabIndex }: TTaskListProps) => {
  const [todos, setTodos] = useState(tasks)

  useEffect(() => {
    setTodos(tasks)
  }, [tasks])

  return (
    <div>
      <ol className={styles.tasksList}>
        {
          todos.map((task, index) => <Task key={index} data={task} getTasks={getTasks} />)
        }
      </ol>
      <Link to={`/task/${activeTabIndex}`} className={styles.addTask}>Add new task</Link>
    </div>
  )
}

TaskList.defaultProps = {
  tasks: [],
  activeTabIndex: 0,
  getTasks: () => {}
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  getTasks: PropTypes.func,
  activeTabIndex: PropTypes.number
}
