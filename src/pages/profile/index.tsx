import { UserForm } from 'components/userForm'
import { updateUser } from 'contracts/user'
import { IUser } from 'interfaces/IUser'
import { useContext } from 'react'
import { UserContext } from 'contexts/userContext'

export const Profile = () => {
  const { user } = useContext(UserContext)

  const submitHandler = async (data: IUser) => {
    await updateUser(data)
  }

  return (
    <UserForm user={user} onSubmit={submitHandler} disabledFields={['email']} />
  )
}
