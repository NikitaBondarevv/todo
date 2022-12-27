import { MouseEvent, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getTaskById } from 'contracts/tasks'
import { TTarget, TUpdateCreateTaskProps } from './types'
import styles from './styles.css'

export const UpdateCreateTask = ({ onSubmit }: TUpdateCreateTaskProps) => {
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
      await onSubmit({
        title: value,
        id: id,
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
