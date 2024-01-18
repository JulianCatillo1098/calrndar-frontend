import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status:"checking",
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onCheking: (state) => {
      (state.status = "checking"),
        (state.user = {}),
        (state.errorMessage = undefined);
    },
    onLogin: (state, { payload }) => {
      (state.status = "autenticado"),
        (state.user = payload),
        (state.errorMessage = undefined);
    },
    onLogout: (state, { payload }) => {
      (state.status = "no-autenticado"),
        (state.user = {}),
        (state.errorMessage = payload);
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },

    

  }, 
});

export const { onCheking, onLogin, onLogout,clearErrorMessage} = authSlice.actions;
