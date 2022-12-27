import { useNavigate } from 'react-router-dom'

import { IUser } from 'interfaces/IUser'
import { UpdateCreateTask } from 'pages/updateCreateTask'
import { createTask } from 'contracts/tasks'

export const CreateTask = () => {
  const navigate = useNavigate()

  const submitHandler = async (data: IUser) => {
    await createTask(data)
    navigate('/tasks')
  }

  return (
    <UpdateCreateTask onSubmit={submitHandler} />
  )
}
