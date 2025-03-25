import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: 'https://dummyjson.com',
  users: [],
}

export const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setUsers: (state, action)=>{
      state.users = action.payload
    },
  }
})

export const { setUsers } = data.actions

export default data.reducer