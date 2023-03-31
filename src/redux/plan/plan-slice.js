import { getPersonalPlan,
  addPersonalPlanAPI,
  addPersonalPlanPreAPI,
  currentPersonalPlanAPI, } from "./plan-operations";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  planData: null,
  accumulationPeriod: {
    month: null,
    year: null,
  },
  isLoading: true,
};

const separatePlanData = (data) => {
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
  name: "plan",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getPersonalPlan.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(getPersonalPlan.fulfilled, (state, { payload }) => {
        const { planData, accumulationPeriod } = separatePlanData(payload);
        state.planData = planData;
        state.accumulationPeriod = payload.accumulationPeriod;
        state.isLoading = false;
      })
      .addCase(getPersonalPlan.rejected, (state, {payload}) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addPersonalPlanPreAPI.fulfilled, (state, { payload }) => {
        const { planData, accumulationPeriod } = separatePlanData(payload);
        state.planData = planData;
        state.accumulationPeriod = accumulationPeriod;
      })
      .addCase(addPersonalPlanAPI.fulfilled, (state, { payload }) => {
        const { planData, accumulationPeriod } = separatePlanData(payload);
        state.planData = { ...planData, id: state.planData.id };
        state.accumulationPeriod = accumulationPeriod;
      })
      .addCase(currentPersonalPlanAPI.fulfilled, (state, { payload }) => {
        const { planData, accumulationPeriod } = separatePlanData(payload);
        state.planData = planData;
        state.accumulationPeriod = accumulationPeriod;
      })
      // .addMatcher(...gl(initialState));
  },
});

export const planSliceReducer = planSlice.reducer;