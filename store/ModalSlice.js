import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, currentData: null, type: null };

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.currentData = payload?.currentData;
      state.type = payload?.type;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.currentData = null;
      state.type = null;
    },
  },
});

export default ModalSlice.reducer;

export const { openModal, closeModal } = ModalSlice.actions;
