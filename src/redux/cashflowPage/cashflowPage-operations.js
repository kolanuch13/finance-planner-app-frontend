import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransactionApi,
  getCashflowLimitsApi,
  getCategoriesApi
} from '../../services/cashflowPageAPI';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const addTransaction = createAsyncThunk(
  'addTransaction',
  async (transaction, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const data = await addTransactionApi(transaction);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getCashflowLimits = createAsyncThunk(
  'cashflow/get/limits',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const data = await getCashflowLimitsApi();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getCategories = createAsyncThunk(
  "categories/get",
  async (data, { rejectWithValue }) => {
    try {
      const categories = await getCategoriesApi();
      return categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const cashflowOperations = {
  addTransaction,
  getCashflowLimits,
  getCategories
}

export default cashflowOperations;