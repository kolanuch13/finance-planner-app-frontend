import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {
    token: null,
    email: null,
    userName: null,
    balance: null,
  },
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // Register=====================================
      .addCase(authOperations.register.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.userName = action.payload.name;
        state.email = action.payload.email;
        state.token = action.payload.token;
        state.balance = action.payload.balance;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(authOperations.register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // LogIn=========================================
      .addCase(authOperations.login.pending, state => {
        state.isLoading = true;
      })
      .addCase(authOperations.login.fulfilled, (state, action) => {
        state.user.userName = action.payload.name;
        state.user.token = action.payload.token;
        state.user.balance = action.payload.balance;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(authOperations.login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      //LogOut ========================================
      .addCase(authOperations.logout.fulfilled, state => {
        state.user.userName = null;
        state.user.token = null;
        state.user.balance = null;
        state.user.email = null;
        state.isLoggedIn = false;
      })
      // Balance======================================
      .addCase(authOperations.balance.pending, state => {
        state.isLoading = true;
      })
      .addCase(authOperations.balance.fulfilled, (state, action) => {
        state.balance = action.payload.balance;
        state.isLoading = false;
      })
      .addCase(authOperations.balance.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // Current======================================
      .addCase(authOperations.current.pending, state => {
        state.isLoading = true;
      })
      .addCase(authOperations.current.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
      })
      .addCase(authOperations.current.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;
