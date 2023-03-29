import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const BASE_URL = process.env.BASE_URL;

axios.defaults.baseURL = 'http://localhost:4000/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const yearInfoThunk = createAsyncThunk(
  '/dynamic/chart',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios.get('/dynamic/chart');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const staticInfoThunk = createAsyncThunk(
  '/dynamic/statistic',
  async (date, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await axios.get('/dynamic/statistic', date);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateImageThunk = createAsyncThunk(
  '/dynamic/flatImage',
  async (file, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);

    try {
      const { data } = await axios.patch('/dynamic/flatImage', file);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
