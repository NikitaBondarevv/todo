import { useNavigate } from 'react-router-dom'

import { UserForm } from 'components/userForm'
import { createUser } from 'contracts/createUser'
import { IUser } from 'interfaces/IUser'

export const CreateUser = () => {
  const navigate = useNavigate()

  const submitHandler = async (data: IUser) => {
    await createUser(data)
    navigate('/createdUser')
  }

  return (
    <UserForm onSubmit={submitHandler} />
  )
}
 