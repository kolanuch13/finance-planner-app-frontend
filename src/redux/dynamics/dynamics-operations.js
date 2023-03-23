import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = process.env.BASE_URL;

axios.defaults.baseURL = `${BASE_URL}`

export const yearInfo = createAsyncThunk(
  '/chart',
  async (credential, thunkAPI) => {
    try {
      const {data} = axios.get('/chart', credential);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const staticInfo = createAsyncThunk(
  '/statistic',
  async (credential, thunkAPI) => {
    try {
      const {data} = axios.get('/statistic', credential);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const updateImage = createAsyncThunk(
  '/img',
  async (credential, thunkAPI) => {
    try {
      const {data} = axios.get('/img', credential);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
