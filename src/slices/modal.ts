import { ModalType } from '@/types/component'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface ModalState {
    toggle: boolean,
    modalType: ModalType
}

const initialState = { toggle: false , modalType: 'ADD_BOARD'} as ModalState

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state: ModalState, {payload} : PayloadAction<ModalType>) => {
      state.modalType = payload
      state.toggle = true

    },
    closeModal: (state: ModalState) => {
        state.toggle = false
    },
  },
})

export const { openModal, closeModal} = modalSlice.actions
export default modalSlice.reducer