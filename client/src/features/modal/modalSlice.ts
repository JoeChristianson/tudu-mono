import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

interface ModalState {
  currentModal:null|ReactNode
}

const initialState: ModalState = {
  currentModal:null
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal:(state,action)=>{
      state.currentModal = action.payload
    },
    closeModal:(state)=>{
      state.currentModal = null
    }
  }
});

export const {openModal,closeModal} = modalSlice.actions;
export default modalSlice.reducer;