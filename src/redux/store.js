import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import categoriesReducer from "./categoriesSlice";

export default configureStore({
  reducer: {
    todos: todosReducer,
    categories: categoriesReducer,
  },
});
