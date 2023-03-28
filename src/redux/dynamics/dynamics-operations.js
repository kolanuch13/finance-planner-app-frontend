import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const BASE_URL = process.env.BASE_URL;

axios.defaults.baseURL = 'http://localhost:4000/api';

export const yearInfoThunk = createAsyncThunk(
  '/dynamic/chart',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/dynamic/chart');
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const staticInfoThunk = createAsyncThunk(
  '/dynamic/statistic',
  async (date, thunkAPI) => {
    console.log(date);
    try {
      const { data } = await axios.get('/dynamic/statistic', date);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateImageThunk = createAsyncThunk(
  '/dynamic/flatImage',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.patch('/dynamic/flatImage', _);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
