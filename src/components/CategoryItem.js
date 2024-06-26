import React from "react";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../redux/categoriesSlice";
import TodoList from "./TodoList";

const CategoryItem = ({ category }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCategory(category.id));
  };

  return (
    <div className="category-item mb-6 p-4 border border-gray-300 rounded dark:border-gray-600">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{category.name}</h2>
        <button className="text-red-500" onClick={handleDelete}>
          Delete Category
        </button>
      </div>
      <TodoList categoryId={category.id} />
    </div>
  );
};

export default CategoryItem;

