import { createSlice } from '@reduxjs/toolkit';
import {
  yearInfoThunk,
  staticInfoThunk,
  updateImageThunk,
  getImageThunk,
} from './dynamics-operations';

const initialState = {
  chartData: {},
  statisticData: {},
  flatImageURL: '',
  isLoading: false,
  error: null,
};

const dynamicSlice = createSlice({
  name: 'dynamic',
  initialState,
  extraReducers: {
    [yearInfoThunk.pending]:(state) =>{
      state.isLoading = true;
    },
    [yearInfoThunk.fulfilled]:(state, { payload }) =>{
      state.isLoading = false;
      state.chartData = payload;
      state.flatImageURL = payload;
    },
    [yearInfoThunk.rejected]:(state, { payload }) =>{
      state.isLoading = false;
      state.error = payload;
    },
    [staticInfoThunk.pending]:(state) =>{
      state.isLoading = true;
    },
    [staticInfoThunk.fulfilled]:(state, { payload }) =>{
      state.isLoading = false;
      state.statisticData = payload;
    },
    [staticInfoThunk.rejected]:(state, { payload }) =>{
      state.isLoading = false;
      state.error = payload;
    },
    [updateImageThunk.pending]:(state) =>{
      state.isLoading = true;
    },
    [updateImageThunk.fulfilled]:(state, { payload }) =>{
      state.isLoading = false;
      state.flatImageURL = payload;
    },
    [updateImageThunk.rejected]:(state, { payload }) =>{
      state.isLoading = false;
      state.error = payload;
    },
    [getImageThunk.pending]:(state) =>{
      state.isLoading = true;
    },
    [getImageThunk.fulfilled]:(state, { payload }) =>{
      state.isLoading = false;
      state.flatImageURL = payload;
    },
    [getImageThunk.rejected]:(state, { payload }) =>{
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const dynamicReducer = dynamicSlice.reducer;
