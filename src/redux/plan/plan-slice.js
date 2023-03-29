import { createSlice } from '@reduxjs/toolkit';
import {
  getPersonalPlan,
  addPersonalPlanAPI,
  addPersonalPlanPreAPI,
  currentPersonalPlanAPI,
} from './plan-operations';

const initialState = {
  planData: null,
  accumulationPeriod: {
    month: null,
    year: null,
  },
};

const separatePlanData = data => {
  const { month, year, ...rest } = data;
  const {
    salary,
    passiveIncome,
    savings,
    cost,
    footage,
    procent,
    _id: id,
  } = rest;
  const accumulationPeriod = { month, year };
  const planData = {
    salary,
    passiveIncome,
    savings,
    cost,
    footage,
    procent,
    id,
  };

  return { accumulationPeriod, planData };
};

const planSlice = createSlice({
  name: 'plan',
  initialState,
  extraReducers: {
    [getPersonalPlan.fulfilled]: (state, { payload }) => {
      if (!payload) {
        return state;
      }
      const { planData, accumulationPeriod } = separatePlanData(payload);
      state.planData = planData;
      state.accumulationPeriod = accumulationPeriod;
    },
    [addPersonalPlanPreAPI.fulfilled]: (state, { payload }) => {
      const { planData, accumulationPeriod } = separatePlanData(payload);
      state.planData = planData;
      state.accumulationPeriod = accumulationPeriod;
    },
    [addPersonalPlanAPI.fulfilled]: (state, { payload }) => {
      const { planData, accumulationPeriod } = separatePlanData(payload);
      state.planData = { ...planData, id: state.planData.id };
      state.accumulationPeriod = accumulationPeriod;
    },
    [currentPersonalPlanAPI.fulfilled]: (state, { payload }) => {
      const { planData, accumulationPeriod } = separatePlanData(payload);
      state.planData = planData;
      state.accumulationPeriod = accumulationPeriod;
    },
  },
});

export default planSlice.reducer;
