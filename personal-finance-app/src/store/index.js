import {configureStore} from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import budgetsReducer from "./budgetsSlice";
import potsReducer from "./potsSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    budgets: budgetsReducer,
    pots: potsReducer,
  },
});

export default store;
