import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { ColumnPayload } from '@/types/schema'
import { generateUniqueId } from '@/utils/helpers'
import { ColumnState } from '@/types/state'

const initialState = { columns: []} as ColumnState

const columnSlice = createSlice({
  name: 'Column',
  initialState,
  reducers: {
    addColumn: (state: ColumnState, { payload }: PayloadAction<ColumnPayload>) => {
      const uniqueColumnId = generateUniqueId("column")
      const newPayload =  {...payload, id: uniqueColumnId, tasks: [] }
      const newColumns = [...state.columns, newPayload]
      state.columns = newColumns
    },
  },
})

export const { addColumn} = columnSlice.actions
export default columnSlice.reducer