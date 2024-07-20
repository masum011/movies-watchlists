import { configureStore } from '@reduxjs/toolkit'
import homeSlice from '../features/home/homeSlice'
import loginSlice from '../features/login/loginSlice'

export const store = configureStore({
  reducer: {
    home: homeSlice,
    login: loginSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

