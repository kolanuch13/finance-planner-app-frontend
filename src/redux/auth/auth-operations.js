import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit/';

const BASE_URL = process.env.BASE_URL;

axios.defaults.baseURL = `${BASE_URL}/auth` 

const clearAuthHeader = () => {
  axios.defaultsheaders.common.Authorization = ``;
}

const accessToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

export const register = createAsyncThunk(
  '/register',
  async (credential, thunkAPI) => {
    try {
      const {data} = await axios.post('/register', credential);
      accessToken.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  '/login',
  async (credential, thunkAPI) => {
    try {
      const {data} = await axios.post('/login', credential);
      accessToken.set(data.token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  '/logOut',
  async (credential, thunkAPI) => {
    try {
      const {data} = await axios.post('/logOut', credential);
      accessToken.set(data.token);
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const balance = createAsyncThunk(
  '/balance',
  async (credential, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const {data} = await axios.get('/balance', credential)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const current = createAsyncThunk(
  '/current',
  async (credential, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const {data} = await axios.get('/current', credential)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)