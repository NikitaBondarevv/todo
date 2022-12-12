import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Task } from './task'
import styles from './styles.css'

export const TaskList = ({ tasks, getTasks }) => {
  const [todos, setTodos] = useState(tasks)
  const [hidden, setHidden] = useState(true)
  const [value, setValue] = useState('')

  useEffect(() => {
    setTodos(tasks)
  }, [tasks])

  const setValueInput = ({ target: { value } }) => {
    setValue(value)
  }

  const showInput = () => {
    setHidden(false)
  }

  const randomInteger = () => {
    const rand = 1 + Math.random() * (100 + 1 - 1);

    return Math.floor(rand);
  }

  const addTaskAndHandleBlur = e => {
    e.preventDefault()

    if (value.length > 2) {
      todos.push({
        title: value,
        id: randomInteger(),
        done: false
      })
    }

    setTodos(todos)
    setHidden(true)
    setValue('')
  }

  return (
    <div>
      <ol className={styles.tasksList}>
        {
          todos.map((task, index) => <Task key={index} index={index + 1} data={task} getTasks={getTasks} />)
        }
      </ol>
      <div className={styles.addTask}>
        {
          hidden
            ? <span onClick={showInput}>Add new task</span>
            : (
              <form onSubmit={addTaskAndHandleBlur}>
                <input
                  className={styles.editableText}
                  name="text"
                  value={value}
                  onChange={setValueInput}
                  onBlur={addTaskAndHandleBlur}
                  autoFocus
                />
              </form>
            )
        }
      </div>
    </div>
  )
}

TaskList.defaultProps = {
  tasks: []
}

TaskList.propTypes = {
  tasks: PropTypes.array
}
