import { configureStore } from "@reduxjs/toolkit";

import ModalSlice from "./ModalSlice";
import EditPostModalSlice from "./EditPostModalSlice";

const store = configureStore({
  reducer: { ModalSlice, EditPostModalSlice },
});

export default store;
