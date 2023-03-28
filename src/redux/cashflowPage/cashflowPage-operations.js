import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addTransactionApi,
  getCashflowLimitsApi,
  getCategoriesApi
} from '../../services/cashflowPageAPI';

export const addTransaction = createAsyncThunk(
  'cashflow/add/transaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const data = await addTransactionApi(transaction);
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
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition(_, { getState }) {
      const { token } = getState().auth;
      return Boolean(token);
    },
  }
);

export const getCategories = createAsyncThunk(
    "categories/get",
    async (_, { rejectWithValue }) => {
      try {
        const categories = await getCategoriesApi();
        console.log("data", categories);
        return categories;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    },
    {
      condition(_, { getState }) {
        const { auth, categories } = getState();
        return Boolean(auth.token) && categories.length === 0;
      },
    }
  );
