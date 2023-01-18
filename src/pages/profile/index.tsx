import { UserForm } from 'components/userForm'
import { updateUser } from 'contracts/user'
import { IUser } from 'interfaces/IUser'
import { useAppSelector } from 'store'

export const Profile = () => {
  const user = useAppSelector((state) => state.user.data)

  const submitHandler = async (data: IUser) => {
    await updateUser(data)
  }

  return (
    <UserForm user={user} onSubmit={submitHandler} disabledFields={['email']} />
  )
}
