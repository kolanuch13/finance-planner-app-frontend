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
  const { 
    months, 
    years,
    salary,
    passiveIncome,
    savings,
    cost,
    footage,
    procent, } = data;
  const accumulationPeriod = { months, years };
  const planData = {
    salary,
    passiveIncome,
    savings,
    cost,
    footage,
    procent,
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
        const { accumulationPeriod, planData } = separatePlanData(payload);
        state.planData = planData;
        state.accumulationPeriod = accumulationPeriod;
        state.isLoading = false;
      })
      .addCase(getPersonalPlan.rejected, (state, {payload}) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addPersonalPlanPreAPI.fulfilled, (state, { payload }) => {
        const { accumulationPeriod } = separatePlanData(payload);
        state.accumulationPeriod = accumulationPeriod;
      })
      .addCase(addPersonalPlanAPI.fulfilled, (state, { payload }) => {
        const { planData, accumulationPeriod } = separatePlanData(payload);
        state.planData = planData;
        state.accumulationPeriod = accumulationPeriod;
      })
      .addCase(currentPersonalPlanAPI.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(currentPersonalPlanAPI.fulfilled, (state, { payload }) => {
        const { accumulationPeriod, planData } = separatePlanData(payload);
        state.planData = planData;
        state.accumulationPeriod = accumulationPeriod;
        state.isLoading = false;
      })
      .addCase(currentPersonalPlanAPI.rejected, (state, {payload}) => {
        state.error = payload;
        state.isLoading = false;
      })
  },
});
 export default planSlice.reducer