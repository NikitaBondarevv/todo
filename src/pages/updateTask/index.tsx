import { useNavigate } from 'react-router-dom'

import { IUser } from 'interfaces/IUser'
import { UpdateCreateTask } from 'pages/updateCreateTask'
import { updateTask } from 'contracts/tasks'

export const UpdateTask = () => {
  const navigate = useNavigate()

  const submitHandler = async (data: IUser) => {
    await updateTask(data)
    navigate('/tasks')
  }

  return (
    <UpdateCreateTask onSubmit={submitHandler} />
  )
}
