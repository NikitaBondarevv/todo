import { FormEvent, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { createTask, getTaskById, updateTask } from 'contracts/tasks'
import { TTarget } from './types'
import styles from './styles.css'
import { Preloader } from 'components/preloader'
import { useValue } from './useValue'

export const ManageTask = () => {
  const { title, description, setTitle, setDescription } = useValue()
  const { day, id } = useParams()
  const navigate = useNavigate()

  const updateTitle = ({ target: { value } }: TTarget) => {
    setTitle(value)
  }

  const updateDescription = ({ target: { value } }: TTarget) => {
    setDescription(value)
  }

  const addUpdateTask = async (e: FormEvent) => {
    e.preventDefault()

    if (title.length <= 2) return

    if (id) {
      await updateTask({
        title,
        id,
        done: false,
        day: Number(day),
        description
      })
    } else {
      await createTask({
        title,
        done: false,
        day: Number(day),
        description
      })
    }

    navigate('/tasks')
  }

  useEffect(() => {
    (async () => {
      if (id) {
        const task = await getTaskById(id)

        setTitle(task.title)
        setDescription(task.description)
      } else {
        setTitle('New task')
      }
    })()
  }, [id])

  return (
    <form onSubmit={addUpdateTask} className={styles.updateCreateTask}>
      {
        !title.length ?
          <Preloader size={100} /> :
          <>
            <input className={styles.title} name="text" value={title} onChange={updateTitle} />
            <textarea
              onChange={updateDescription}
              placeholder="Add description here"
              className={styles.description}
              name="description"
              value={description}
            />
            <input type="submit" value="SAVE" />
          </>
      }
    </form>
  )
}
