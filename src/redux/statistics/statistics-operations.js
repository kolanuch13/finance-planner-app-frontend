import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import statisticsAPI from 'services/statisticsAPI';
const period = JSON.parse(localStorage.getItem('selectedPeriod'));

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
      const { data } = await statisticsAPI.categoryTypeStatistic();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const expenseStatistic = createAsyncThunk(
  '/statistic/expense',
  async (period, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await statisticsAPI.expenseStatistic(period);
      return data.result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const categoryStatistic = createAsyncThunk(
  '/statistic/categories',
  async (period, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await statisticsAPI.categoriesStatistic(period);

      return data.calculatedResult;
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
      const response = await statisticsAPI.updateTransaction(
        credention.idTransaction,
        credention.data
      );
      thunkAPI.dispatch(expenseStatistic(period));
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
      await statisticsAPI.removeExpense(transactionId);
      thunkAPI.dispatch(expenseStatistic(period));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const statisticsOperations = {
  categoryTypeStatistic,
  expenseStatistic,
  categoryStatistic,
  removeExpense,
  updateTransaction,
};
export default statisticsOperations;
