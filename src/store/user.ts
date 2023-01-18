import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IUser } from 'interfaces/IUser'

export interface UserState {
  data?: IUser
  isAuthenticated: boolean
}

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

// Action creators are generated for each case reducer function
export const { login, logout } = user.actions

export default user.reducer
