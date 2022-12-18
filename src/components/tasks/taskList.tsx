import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { UpdateCreateTask } from '../updateCreateTask'
import { Task } from './task'
import styles from './styles.css'

export const TaskList = ({ tasks, getTasks, activeTabIndex }) => {
  const [todos, setTodos] = useState(tasks)

  useEffect(() => {
    setTodos(tasks)
  }, [tasks])

  return (
    <>
      <div>
        <ol className={styles.tasksList}>
          {
            todos.map((task, index) => <Task key={index} data={task} getTasks={getTasks} />)
          }
        </ol>
        <a href="#" className={styles.addTask}>Add new task</a>
      </div>
      <UpdateCreateTask text="New Task" getTasks={getTasks} activeTabIndex={activeTabIndex} />
    </>
  )
}

TaskList.defaultProps = {
  tasks: [],
  getTasks: () => { },
  activeTabIndex: 0
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  getTasks: PropTypes.func,
  activeTabIndex: PropTypes.number
}
