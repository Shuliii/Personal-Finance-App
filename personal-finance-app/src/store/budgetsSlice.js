import { createSlice } from "@reduxjs/toolkit";
import { getFinanceData } from "../data/data";

const data = getFinanceData();
const budgets = data.budgets;

const budgetSlice = createSlice({
  name: "budgets",
  initialState: budgets,
  reducers: {
    addBudget: (state, action) => {
      state.push(action.payload);
    },
    editBudget: (state, action) => {
      const { category } = action.payload;
      const existingBudget = state.find((b) => b.category === category);
      if (existingBudget) {
        Object.assign(existingBudget, action.payload);
      }
    },
    deleteBudget: (state, action) => {
      const category = action.payload;
      const existingBudget = state.find((b) => b.category === category);
      state.pop(existingBudget);
    },
  },
});

export default budgetSlice.reducer;
export const { addBudget, editBudget, deleteBudget } = budgetSlice.actions;
