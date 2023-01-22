import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IUser } from 'interfaces/IUser'
import { UserState } from 'interfaces/IUserState'

const initialState: UserState = {
  isAuthenticated: false,
}

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state: UserState, action: PayloadAction<IUser>) => {
      state.data = action.payload
      state.isAuthenticated = true
    },
    
    logout: (state: UserState) => {
      delete state.data
      state.isAuthenticated = false
    },
  },
})

export const { login, logout } = user.actions

export default user.reducer
