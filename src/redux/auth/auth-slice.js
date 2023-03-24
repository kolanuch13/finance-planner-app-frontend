import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, balance, current } from './auth-operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      token: null,
      email: null,
      userName: null,
      balance: null,
    },
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // Register=====================================
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        // state.userName = action.payload.name;
        // state.token = action.payload.token;
        // state.balance = action.payload.balance;
        // state.email = action.payload.email;
        // state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // LogIn=========================================
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user.userName = action.payload.name;
        state.user.token = action.payload.token;
        state.user.balance = action.payload.balance;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      //LogOut ========================================
      .addCase(logOut.fulfilled, state => {
        state.user.userName = null;
        state.user.token = null;
        state.user.balance = null;
        state.user.email = null;
        state.isLoggedIn = false;
      })
      // Balance======================================
      .addCase(balance.pending, state => {
        state.isLoading = true;
      })
      .addCase(balance.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
        state.isLoading = false;
      })
      .addCase(balance.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // Current======================================
      .addCase(current.pending, state => {
        state.isLoading = true;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(current.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
