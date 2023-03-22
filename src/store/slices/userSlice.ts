import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: null,
  token: null,
  id: null,
  fullName: '',
  gender: null,
  date: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
      state.fullName = action.payload.fullName
      state.gender = action.payload.gender
      state.date = action.payload.date
    },
    removeUser(state, action) {
      state.email = null
      state.token = null
      state.id = null
      state.fullName = action.payload.fullName
      state.gender = action.payload.gender
      state.date = action.payload.date
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
