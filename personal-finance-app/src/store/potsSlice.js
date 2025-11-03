import {createSlice} from "@reduxjs/toolkit";
import {getFinanceData} from "../data/data";

const data = getFinanceData();
const pots = data.pots;

const potsSlice = createSlice({
  name: "pots",
  initialState: pots,
  reducers: {
    addPot: (state, action) => {
      state.push(action.payload);
    },
    editPot: (state, action) => {},
    deletePot: (state, action) => {
      const pot = action.payload;
      return state.filter((a) => a.name !== pot);
    },
    addMoney: (state, action) => {},
  },
});

export default potsSlice.reducer;
export const {addPot, editPot, deletePot} = potsSlice.actions;
