import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const initialState = {
  user: {
    token: null,
    email: null,
    password: null,
    userName: '',
    balance: null,
  },
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveCredentials(state, action) {
      state.user.email = action.payload.email;
      state.user.password = action.payload.password;
    },
  },
  extraReducers: builder => {
    builder
      // Register=====================================
      .addCase(authOperations.register.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.userName = action.payload.name;
        state.user.email = action.payload.email;
        state.user.token = action.payload.token;
        state.user.balance = action.payload.balance;
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
        state.user.balance = action.payload.balance;
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

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['user'],
};

export const authReducer = persistReducer(persistConfigAuth, authSlice.reducer);
export const { saveCredentials } = authSlice.actions;
