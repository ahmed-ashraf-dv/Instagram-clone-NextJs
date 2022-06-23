import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: true, currentData: null, type: "Preview Post" };

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState,
  reducers: {
    openModal: (state, { currentData = null, type }) => {
      state.isOpen = true;
      state.currentData = currentData;
      state.type = type;
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
