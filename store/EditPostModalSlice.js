import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, isPuplisher: null, link: "",   noDel: false };

const EditPostModalSlice = createSlice({
  name: "EditPostModalSlice",
  initialState,
  reducers: {
    openModal: (state, { payload }) => {
      state.isOpen = true;
      state.isPuplisher = payload?.isPuplisher;
      state.link = payload?.link;
      state.noDel = payload?.noDel;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.isPuplisher = null;
    },
  },
});

export default EditPostModalSlice.reducer;

export const { openModal, closeModal } = EditPostModalSlice.actions;
