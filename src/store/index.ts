import { configureStore } from '@reduxjs/toolkit'
import boardReducer from '@/slices/board'
import columnReducer from '@/slices/column'
import modalReducer from '@/slices/modal'

export const store = configureStore({
  reducer: {
    board: boardReducer,
    column: columnReducer,
    modal: modalReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

