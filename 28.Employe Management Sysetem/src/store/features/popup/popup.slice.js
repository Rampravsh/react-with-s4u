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
      state.editPopup = action.payload ?? true;
    },
    closeDeletePopup: (state, action) => {
      state.editPopup = false;
    },
  },
});

export default popupSlice.reducer;
