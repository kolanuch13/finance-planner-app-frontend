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

export const getAllCategory = async () => {
  try {
    const { data } = await axios('/category');
    return data;
  } catch (error) {
    console.log(error.message);
  }
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
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await sіtatisticsAPI.expenseStatistic();
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  '/statistic/update',
  async (credention, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);

    try {
      const response = await sіtatisticsAPI.updateTransaction(
        credention.idTransaction,
        credention.data
      );
      thunkAPI.dispatch(expenseStatistic());
      return response.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeExpense = createAsyncThunk(
  '/statistic/delete',
  async (transactionId, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      await sіtatisticsAPI.removeExpense(transactionId);
      thunkAPI.dispatch(expenseStatistic());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const statisticsOperations = {
  categoryTypeStatistic,
  expenseStatistic,
  removeExpense,
  updateTransaction,
};
export default statisticsOperations;
