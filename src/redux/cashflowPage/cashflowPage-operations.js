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
  'cashflow/add/transaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await addTransactionApi(transaction);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCashflowLimits = createAsyncThunk(
  'cashflow/get/limits',
  async (_, { rejectWithValue }) => {
    try {
      const data = await getCashflowLimitsApi();
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  // {
  //   condition(_, { getState }) {
  //     const { token } = getState().auth;
  //     return Boolean(token);
  //   },
  // }
);

export const getCategories = createAsyncThunk(
  "categories/get",
  async (data, { rejectWithValue }) => {
    try {
      const categories = await getCategoriesApi();
      token.set(data.token);
      return categories;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  // {
  //   condition(_, { getState }) {
  //     const { auth, categories } = getState();
  //     return Boolean(auth.token) && categories.length === 0;
  //   },
  // }
);

const cashflowOperations = {
  addTransaction,
  getCashflowLimits,
  getCategories
}

export default cashflowOperations;