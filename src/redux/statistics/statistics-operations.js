import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import sіtatisticsAPI from '../../services/sіtatisticsAPI';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const categoryTypeStatistic = createAsyncThunk(
  '/statistic/category',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await sіtatisticsAPI.categoryTypeStatistic();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const expenseStatistic = createAsyncThunk(
  '/statistic/expense',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await sіtatisticsAPI.expenseStatistic();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const statisticsOperations = {
  categoryTypeStatistic,
  expenseStatistic,
};
export default statisticsOperations;
