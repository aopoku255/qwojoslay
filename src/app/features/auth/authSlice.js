import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthCredentials: (state, action) => {
      state.user = action.payload.data;
    },
  },
});

export const { setAuthCredentials } = authSlice.actions;
export default authSlice.reducer;
