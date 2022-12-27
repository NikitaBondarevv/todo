import { MouseEvent, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { createTask, getTaskById, updateTask } from 'contracts/tasks'
import { TTarget } from './types'
import styles from './styles.css'

export const UpdateCreateTask = () => {
  const [value, setValue] = useState('')
  const [valueDescription, setValueDescription] = useState('')
  const { day, id } = useParams()
  const navigate = useNavigate()

  const setValueTitle = ({ target: { value } }: TTarget) => {
    setValue(value)
  }

  const setDescription = ({ target: { value } }: TTarget) => {
    setValueDescription(value)
  }

  const addTaskAndHandleBlur = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault()

    if (value.length > 2) {
      if (id) {
        await updateTask({
          title: value,
          id: id,
          done: false,
          day: Number(day),
          description: valueDescription
        })
      } else {
        await createTask({
          title: value,
          done: false,
          day: Number(day),
          description: valueDescription
        })
      }
    }

    navigate('/tasks')
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
