import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { IInfo } from 'interfaces/IInfo'
import { TaskInfoState } from 'interfaces/ITaskInfoState'

const initialState: TaskInfoState = {
  data: {
    done: 0,
    inProgress: 0,
    total: 0,
    waiting: 0
  }
}

export const taskInfo = createSlice({
  name: 'taskInfo',
  initialState,
  reducers: {
    setInfo: (state: TaskInfoState, action: PayloadAction<IInfo>) => {
      state.data = action.payload
    }
  },
})

export const { setInfo } = taskInfo.actions

export default taskInfo.reducer
