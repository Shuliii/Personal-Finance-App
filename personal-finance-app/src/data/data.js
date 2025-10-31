import FinanceData from "./data.json";

let financeData = FinanceData;

export const getFinanceData = () => financeData;

// CREATE
export const addBudget = (newBudget) => {
  financeData = {
    ...financeData,
    budgets: [...financeData.budgets, newBudget],
  };
  return newBudget;
};
