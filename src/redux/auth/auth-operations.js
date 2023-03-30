import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../services/authAPI';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.interceptors.response.use(
  res => res,
  error => {
    if (error.response.status === 401) {
      localStorage.removeItem('persist:auth');
      window.location.href = '/finance-planner-app/login';
      return Promise.reject(error);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authAPI.register(credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await authAPI.login(credentials);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const verify = createAsyncThunk(
  'auth/login',
  async (varificationToken, thunkAPI) => {
    try {
      const { data } = await authAPI.verify(varificationToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await authAPI.logout();
    token.unset();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const balanceOperation = createAsyncThunk(
  '/auth/balance',
  async (userData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await authAPI.balance(userData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const current = createAsyncThunk(
  '/auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await authAPI.currentUser();
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue();
    }
  }
);
const authOperations = {
  register,
  login,
  verify,
  logout,
  balanceOperation,
  current,
};
export default authOperations;
