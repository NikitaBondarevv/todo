import { FormEvent, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { createTask, getTaskById, updateTask } from 'contracts/tasks'
import { TTarget } from './types'
import styles from './styles.css'
import { Preloader } from 'components/preloader'

export const ManageTask = () => {
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

  const addUpdateTask = async (e: FormEvent) => {
    e.preventDefault()

    if (value.length <= 2) return

    if (id) {
      await updateTask({
        title: value,
        id,
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

    navigate('/tasks')
  }

  useEffect(() => {
    (async () => {
      if (id) {
        const task = await getTaskById(id)

        setValue(task.title)
        setValueDescription(task.description)
      } else {
        setValue('New task')
      }
    })()
  }, [id])

  return (
    !value.length
      ? <Preloader size={100} />
      : (
        <form onSubmit={addUpdateTask} className={styles.updateCreateTask}>
          <input className={styles.title} name="text" value={value} onChange={setValueTitle} />
          <textarea
            onChange={setDescription}
            placeholder="Add description here"
            className={styles.description}
            name="description"
            value={valueDescription}
          />
          <input type="submit" value="SAVE" />
        </form>
      )
  )
}
