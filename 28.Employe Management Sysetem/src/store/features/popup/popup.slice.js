import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editPopup: false,
  deletePopup: false,
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    openEditPopup: (state, action) => {
      state.editPopup = action.payload ?? true;
    },
    closeEditPopup: (state, action) => {
      state.editPopup = false;
    },
    openDeletePopup: (state, action) => {
      state.deletePopup = action.payload ?? true;
    },
    closeDeletePopup: (state, action) => {
      state.deletePopup = false;
    },
  },
});

export const {
  openDeletePopup,
  openEditPopup,
  closeDeletePopup,
  closeEditPopup,
} = popupSlice.actions;

export default popupSlice.reducer;
