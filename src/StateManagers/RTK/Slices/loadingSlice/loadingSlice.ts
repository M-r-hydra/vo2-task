import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isAnimating: false,
    key: 0,
  },
  reducers: {
    setLoadingTrue: (state) => {
      state.isAnimating = true;
    },
    setLoadingFalse: (state) => {
      state.isAnimating = false;
    },
  },
});

export const selectLoading = (state: any) => state.loading;
