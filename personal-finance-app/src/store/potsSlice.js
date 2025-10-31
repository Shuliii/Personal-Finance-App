import {createSlice} from "@reduxjs/toolkit";
import {getFinanceData} from "../data/data";

const data = getFinanceData();
const pots = data.pots;

const potsSlice = createSlice({
  name: "pots",
  initialState: pots,
  reducers: {
    addPots: (state, action) => {
      state.push(action.payload);
    },
    addMoney: (state, action) => {},
  },
});

export default potsSlice.reducer;
export const {addPots} = potsSlice.actions;
