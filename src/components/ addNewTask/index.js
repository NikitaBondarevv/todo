import { useState } from 'react'
import PropTypes from 'prop-types'

import { createTask } from '../../contracts/tasks'
import styles from './styles.css'

export const AddNewTask = ({ getTasks, activeTabIndex }) => {
  const [hidden, setHidden] = useState(true)
  const [value, setValue] = useState('')

  const setValueInput = ({ target: { value } }) => {
    setValue(value)
  }

  const showInput = () => {
    setHidden(false)
  }

  const randomInteger = () => {
    const rand = 1 + Math.random() * (100 + 1 - 1)

    return Math.floor(rand)
  }

  const addTaskAndHandleBlur = e => {
    e.preventDefault()

    const addCurrentTask = async () => {
      await createTask({
        title: value,
        id: randomInteger(),
        done: false,
        day: activeTabIndex
      })

      getTasks()
    }

    if (value.length > 2) {
      addCurrentTask()
    }

    setHidden(true)
    setValue('')
  }

  return (
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
  )
}

AddNewTask.defaultProps = {
  getTasks: () => { }
}

AddNewTask.propTypes = {
  getTasks: PropTypes.func,
}
