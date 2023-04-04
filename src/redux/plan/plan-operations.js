import { createAsyncThunk } from "@reduxjs/toolkit";
import { planAPI } from "../../services/index";
import axios from "axios";

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getPersonalPlan = createAsyncThunk(
  "plan/getPersonalPlan",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.user.token;
    if (persistToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistToken);
    try {
      const { data } = await planAPI.getPersonalPlanAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
)

export const addPersonalPlanAPI = createAsyncThunk(
  "plan/addPersonalPlan",
  async (planData, thunkAPI) => {
    try {
      const { data } = await planAPI.addPersonalPlanAPI(planData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const addPersonalPlanPreAPI = createAsyncThunk(
  "plan/addPersonalPlanPre",
  async (prePlanData, thunkAPI) => {
    try {
      const { data } = await planAPI.addPersonalPlanPreAPI(prePlanData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const currentPersonalPlanAPI = createAsyncThunk(
  "plan/currentPersonalPlan",
  async (planData, thunkAPI) => {
    try {
      const { data } = await planAPI.currentPersonalPlanAPI(planData);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)
