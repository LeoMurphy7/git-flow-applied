import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
}

export const counterSliceTwo = createSlice({
  name:'counterTwo',
  initialState,
  reducers:{
    increment : (state) => {
      state.count++;
    },

    decrement : (state) => {
      state.count--;
    }
  }
});

export const {increment, decrement} = counterSliceTwo.actions;
export default counterSliceTwo.reducer;