import {configureStore} from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import budgetsReducer from "./budgetsSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    budgets: budgetsReducer,
  },
});

export default store;
