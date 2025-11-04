import { createSlice } from "@reduxjs/toolkit";
import { getFinanceData } from "../data/data";

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
    addMoney: (state, action) => {
      const updatedPot = action.payload;

      const potIndex = state.findIndex((p) => p.name === updatedPot.name);

      if (potIndex !== -1) {
        // Replace the old pot with the updated one
        state[potIndex] = updatedPot;
      }
    },
    withdrawMoney: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default potsSlice.reducer;
export const { addPot, editPot, deletePot, addMoney, withdrawMoney } =
  potsSlice.actions;
