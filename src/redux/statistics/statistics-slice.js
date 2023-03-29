import { createSlice } from '@reduxjs/toolkit';
import statisticsOperations from './statistics-operations';

const initialState = {
  transactions: null,
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
      .addCase(statisticsOperations.expenseStatistic.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(
        statisticsOperations.expenseStatistic.fulfilled,
        (state, action) => {
          state.transactions = action.payload;
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
      )
      // Statistic/expense/remove=====================================
      .addCase(statisticsOperations.removeExpense.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(
        statisticsOperations.removeExpense.fulfilled,
        (state, action) => {
          state.transactions = state.transactions.filter(
            ({ id }) => id !== action.payload
          );

          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(statisticsOperations.removeExpense.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      // Statistic/expense/update=====================================
      .addCase(statisticsOperations.updateTransaction.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(
        statisticsOperations.updateTransaction.fulfilled,
        (state, action) => {
          // state.transactions = state.updateTransaction.map(
          //   ({ id }) => id !== action.payload
          // );
          console.log(action.payload);

          state.isLoggedIn = true;
          state.isLoading = false;
        }
      )
      .addCase(
        statisticsOperations.updateTransaction.rejected,
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        }
      )
      // Statistic/category=========================================
      .addCase(statisticsOperations.categoryTypeStatistic.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        statisticsOperations.categoryTypeStatistic.fulfilled,
        (state, action) => {
          // state.transactions.sum = action.payload.sum;
          // state.transactions.category = action.payload.category;
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
      );
  },
});

export default statisticsSlice.reducer;
