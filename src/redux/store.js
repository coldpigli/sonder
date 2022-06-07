import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/authSlice'
import { commentReducer } from './slices/commentSlice'
import { postReducer } from './slices/postSlice'
import { userReducer } from './slices/userSlice'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      posts: postReducer,
      comments: commentReducer,
      users: userReducer
  },
}, composeWithDevTools(applyMiddleware([])));

