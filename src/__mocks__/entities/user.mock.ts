import { IUser } from 'interfaces/IUser'

export const user: IUser = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'test@gmail.com',
  password: 'test-password',
  id: 'test-id',
  error: '',
}

export const fakeUser = {
  firstName: 'test-firstName',
  lastName: 'test-lastName',
  email: 'test@gmail.com',
  password: 'test-password',
  passwordRepeat: 'test-password'
}
