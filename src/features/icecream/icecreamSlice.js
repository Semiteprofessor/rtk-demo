import { createSlice } from "@reduxjs/toolkit";

import { buyCake as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIcecream: 20,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,
  reducers: {
    buyIcecream: (state) => {
      state.numOfIcecream--;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(cakeOrdered, (state) => {
  //     state.numOfIcecream--;
  //   });
  // builder.addCase(cakeActions.restocked, (state, action) => {
  //   state.numOfCake += action.payload;
  // });
  // },
});

export default icecreamSlice.reducer;
export const { buyIcecream, restocked } = icecreamSlice.actions;
