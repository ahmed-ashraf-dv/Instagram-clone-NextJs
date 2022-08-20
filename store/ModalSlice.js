import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  currentData: null,
  type: null,
  cuurentUsername: null,
  noDel: false
};

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.noDel = payload?.noDel;
      state.currentData = payload?.currentData;
      state.cuurentUsername = payload?.cuurentUsername;
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
