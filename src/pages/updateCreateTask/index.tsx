import { MouseEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { TTarget } from './types'
import { createTask, getTaskById } from 'contracts/tasks'
import styles from './styles.css'

export const UpdateCreateTask = () => {
  const [value, setValue] = useState('New task')
  const [valueDescription, setValueDescription] = useState('')
  const { day, id } = useParams()

  const setValueTitle = ({ target: { value } }: TTarget) => {
    setValue(value)
  }

  const setDescription = ({ target: { value } }: TTarget) => {
    setValueDescription(value)
  }

  const addTaskAndHandleBlur = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()

    if (value.length > 2) {
      await createTask({
        title: value,
        done: false,
        day: Number(day),
        description: valueDescription
      })
    }
  }

  useEffect(() => {
    (async () => {
      if (id) {
        const task = await getTaskById(id)

        setValue(task.title)
        setValueDescription(task.description)
      }
    })()
  }, [id])

  return (
    <form className={styles.updateCreateTask}>
      <input className={styles.title} name="text" value={value} onChange={setValueTitle} />
      <textarea
        onChange={setDescription}
        placeholder="Add description here"
        className={styles.description}
        name="description"
        value={valueDescription}
      />
      <input onClick={addTaskAndHandleBlur} type="button" value="SAVE" />
    </form>
  )
}
