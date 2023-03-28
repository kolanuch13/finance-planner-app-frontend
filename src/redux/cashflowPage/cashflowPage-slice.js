import { createSlice } from '@reduxjs/toolkit';
import cashflowOperations from './statistics-operations';

const initialState = {
  newTransaction: {
    date: null,
    comment: null,
    token: null,
    sum: null,
    category: null,
    categoryType: null,
  },
  limit: {
    day: null,
    month: null,
  },
  categories: [],
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const cashflowSlice = createSlice({
  name: 'cashflow',
  initialState,

  extraReducers: builder => {
    builder
      // Transactions/addTransaction=====================================
      .addCase(
        cashflowOperations.addTransaction.pending,
        (state, _) => {
          state.isLoading = true;
        }
      )
      .addCase(
        cashflowOperations.addTransaction.fulfilled,
        (state, action) => {
          if (state.newTransaction.categoryType === 'income') {
            state.newTransaction.date = action.payload.date;
            state.newTransaction.sum = action.payload.sum;
            state.newTransaction.categoryType = action.payload.categoryType;
          } else {
            state.newTransaction.date = action.payload.date;
            state.newTransaction.comment = action.payload.comment;
            state.newTransaction.sum = action.payload.sum;
            state.newTransaction.category = action.payload.category;
            state.newTransaction.categoryType = action.payload.categoryType;
          }
          state.newTransaction.token = action.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(
        cashflowOperations.addTransaction.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      // Transactions/getCashflowLimits=========================================
      .addCase(cashflowOperations.getCashflowLimits.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        cashflowOperations.getCashflowLimits.fulfilled,
        (state, action) => {
          state.limit.day = action.payload.limitDay;
          state.limit.month = action.payload.limitMonth;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(
        cashflowOperations.getCashflowLimits.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      // Transactions/getCashflowLimits=========================================
      .addCase(cashflowOperations.getCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        cashflowOperations.getCategories.fulfilled,
        (state, action) => {
          state.categories = action.payload.categories;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(
        cashflowOperations.getCategories.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export default cashflowSlice.reducer;
