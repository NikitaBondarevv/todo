import { useState } from 'react'
import PropTypes from 'prop-types'

import { createTask } from '../../contracts/tasks'
import styles from './styles.css'

export const UpdateCreateTask = ({ getTasks, text, activeTabIndex }) => {
  const [value, setValue] = useState(text)
  const [valueDescription, setValueDescription] = useState('')

  const setValueTitle = ({ target: { value } }) => {
    setValue(value)
  }

  const setDescription = ({ target: { value } }) => {
    setValueDescription(value)
  }

  const addTaskAndHandleBlur = e => {
    e.preventDefault()

    const addCurrentTask = async () => {
      await createTask({
        title: value,
        done: false,
        day: activeTabIndex,
        description: valueDescription
      })

      getTasks()
    }

    if (value.length > 2) {
      addCurrentTask()
    }

    setValue('New Task')
    setValueDescription('')
  }

  return (
    <form className={styles.updateCreateTask}>
      <input className={styles.title} name="text" value={value} onChange={setValueTitle} />
      <textarea
        onChange={setDescription}
        placeholder="Add description here"
        className={styles.description}
        name="description"
      />
      <input onClick={addTaskAndHandleBlur} type="button" value="SAVE" />
    </form>
  )
}

UpdateCreateTask.defaultProps = {
  getTasks: () => { },
  text: '',
  activeTabIndex: 0
}

UpdateCreateTask.propTypes = {
  getTasks: PropTypes.func,
  text: PropTypes.string,
  activeTabIndex: PropTypes.number
}
