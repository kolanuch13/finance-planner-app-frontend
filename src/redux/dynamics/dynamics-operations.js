import { createAsyncThunk } from '@reduxjs/toolkit';
import { dynamicAPI } from '../../services/index';

export const yearInfoThunk = createAsyncThunk(
  '/dynamic/chart',
  async (_, thunkAPI) => {
    try {
      const { data } = await dynamicAPI.yearInfo();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const staticInfoThunk = createAsyncThunk(
  '/dynamic/statistic',
  async (date, thunkAPI) => {
    try {
      const { data } = await dynamicAPI.statisticInfo(date);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateImageThunk = createAsyncThunk(
  '/dynamic/flatImage',
  async (file, thunkAPI) => {
    try {
      const { data } = await dynamicAPI.updateImage(file);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getImageThunk = createAsyncThunk(
  '/dynamic/flatImage',
  async (_, thunkAPI) => {
    try {
      const { data } = await dynamicAPI.getImage();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
