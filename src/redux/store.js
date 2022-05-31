import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/authSlice'
import { postReducer } from './slices/postSlice'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      posts: postReducer
  },
})