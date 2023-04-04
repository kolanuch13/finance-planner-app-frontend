import { createAsyncThunk } from '@reduxjs/toolkit';
import { cashflowAPI } from '../../services/index';

export const addTransaction = createAsyncThunk(
  'addTransaction',
  async (transaction, thunkAPI) => {
    try {      
      const data = await cashflowAPI.addTransactionApi(transaction);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
  );
  
  export const getCashflowLimits = createAsyncThunk(
    'cashflow/get/limits',
    async (_, thunkAPI) => {
      try {
        const data = await cashflowAPI.getCashflowLimitsApi();
        return data;
      } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getCategories = async () => {
    try {
      const {data} = await cashflowAPI.getCategoriesApi();
      return data;
    } catch (error) {
      return console.log(error.message);
    }
};

const cashflowOperations = {
  addTransaction,
  getCashflowLimits,
  getCategories
}

export default cashflowOperations;