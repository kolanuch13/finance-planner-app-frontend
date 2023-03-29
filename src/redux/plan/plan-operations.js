const { createAsyncThunk } = require("@reduxjs/toolkit");
const planAPI = require("../../services/planAPI");

export const getPersonalPlan = createAsyncThunk(
  "plan/getPersonalPlan",
  async (_, thunkAPI) => {
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
