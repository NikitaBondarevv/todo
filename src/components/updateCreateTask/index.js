import { useState } from 'react'

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
      <textarea onChange={setDescription} placeholder="Add description here" className={styles.description} name="description" />
      <input onClick={addTaskAndHandleBlur} type="button" value="SAVE" />
    </form>
  )
}
