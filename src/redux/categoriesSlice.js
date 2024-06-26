import { createSlice } from "@reduxjs/toolkit";

const loadCategories = () => {
  const categories = localStorage.getItem("categories");
  return categories ? JSON.parse(categories) : [];
};

const saveCategories = (categories) => {
  localStorage.setItem("categories", JSON.stringify(categories));
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState: loadCategories(),
  reducers: {
    addCategory: (state, action) => {
      state.push(action.payload);
      saveCategories(state);
    },
    deleteCategory: (state, action) => {
      const newState = state.filter(
        (category) => category.id !== action.payload
      );
      saveCategories(newState);
      return newState;
    },
  },
});

export const { addCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
