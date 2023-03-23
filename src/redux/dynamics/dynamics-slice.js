import { createSlice } from "@reduxjs/toolkit";
import { yearInfo, staticInfo, updateImage } from "./dynamics-operations";

const dynamicSlice = createSlice({
  name: 'dynamics',
  initialState: {
    acumulated: null,
    expences: null,
    income: null,
    plan: null,
  }
},
)
