import { createSlice } from '@reduxjs/toolkit';
import cashflowOperations from './cashflowPage-operations';

const initialState = {
  newTransaction: {
    date: null,
    comment: null,
    sum: null,
    category: null,
    categoryType: null,
  },
  limit: {
    day: null,
    month: null,
  },
  categories: [],
  isLoading: false,
  error: null,
};

const cashflowSlice = createSlice({
  name: 'cashflowPage',
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
          state.newTransaction.date = action.payload.date;
          state.newTransaction.comment = action.payload.comment;
          state.newTransaction.sum = action.payload.sum;
          state.newTransaction.category = action.payload.category;
          state.newTransaction.categoryType = action.payload.categoryType;
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
      // Transactions/getCategories=========================================
      // .addCase(cashflowOperations.getCategories.pending, state => {
      //   state.isLoading = true;
      // })
      // .addCase(
      //   cashflowOperations.getCategories.fulfilled,
      //   (state, action) => {
      //     state.categories = action.payload.data.categories;
      //     state.isLoading = false;
      //   }
      // )
      // .addCase(
      //   cashflowOperations.getCategories.rejected,
      //   (state, action) => {
      //     state.error = action.payload;
      //     state.isLoading = false;
      //   }
      // );
  },
});

export default cashflowSlice.reducer;
