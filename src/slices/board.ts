import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { BoardPayload, BoardResponse } from '@/types/schema'
import { BoardState } from '@/types/state'
import { generateUniqueId } from '@/utils/helpers'

const initialState = { boards: [], currentBoard: null } as BoardState

const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addBoard: (state: BoardState, { payload }: PayloadAction<BoardPayload>) => {
      const uniqueBoardId = generateUniqueId("board")
      const newPayload =  {...payload, id: uniqueBoardId }
      const newBoards = [...state.boards, newPayload]
      state.boards = newBoards
      state.currentBoard = newPayload
    },

    deleteBoard: (state: BoardState, { payload }: PayloadAction<{id: string}>) => {
      const newBoards = state.boards.filter((element) => {
        return element.id !== payload.id
      })
      state.boards = newBoards
    },

    editBoard: (state: BoardState, {payload}: PayloadAction<{id : string}>) => {
      const currentElement = state.boards.find((element) => {
        if(element.id === payload.id){
          return payload
        }
      })

      const filteredList = state.boards.filter((element) => {
        return element.id !== payload.id
      })

      state.boards = [...filteredList, currentElement] as BoardResponse[]
    },
    setCurrentBoard: (state: BoardState, {payload}: PayloadAction<BoardResponse>) => {
      state.currentBoard = payload
    }, 
    updateBoardColumn: (state: BoardState, {payload}: PayloadAction<{currentBoardId: string, newColumns: BoardResponse['columns']}>) => {
      const currentElement = state.boards.find((element) => element.id === payload.currentBoardId) as BoardResponse
      currentElement.columns = payload.newColumns
      const filteredList = state.boards.filter((element) => element.id !== payload.currentBoardId)
      state.boards = [...filteredList, currentElement]
    }



  },
})

export const { addBoard, deleteBoard, editBoard, setCurrentBoard, updateBoardColumn } = boardSlice.actions
export default boardSlice.reducer