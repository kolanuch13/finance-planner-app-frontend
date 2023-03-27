import { createSlice } from '@reduxjs/toolkit';
import statisticsOperations from './statistics-operations';

const initialState = {
  transaction: {
    date: null,
    comment: null,
    token: null,
    sum: null,
    category: null,
  },
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: 'statistic',
  initialState,

  extraReducers: builder => {
    builder
      // Statistic/expense=====================================
      .addCase(
        statisticsOperations.categoryTypeStatistic.pending,
        (state, _) => {
          state.isLoading = true;
        }
      )
      .addCase(
        statisticsOperations.categoryTypeStatistic.fulfilled,
        (state, action) => {
          state.transaction.date = action.payload.date;
          state.transaction.comment = action.payload.comment;
          state.transaction.sum = action.payload.sum;
          state.transaction.category = action.payload.category;
          state.transaction.token = action.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(
        statisticsOperations.categoryTypeStatistic.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      // Statistic/category=========================================
      .addCase(statisticsOperations.expenseStatistic.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        statisticsOperations.categoryTypeStatistic.fulfilled,
        (state, action) => {
          state.transaction.sum = action.payload.sum;
          state.transaction.category = action.payload.category;
          state.transaction.token = action.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(
        statisticsOperations.expenseStatistic.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      );
  },
});

export default statisticsSlice.reducer;
