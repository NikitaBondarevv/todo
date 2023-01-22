import { IUser } from 'interfaces/IUser'

export interface UserState {
  data?: IUser
  isAuthenticated: boolean
}
