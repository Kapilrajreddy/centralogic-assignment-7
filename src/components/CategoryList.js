import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCategory } from "../redux/categoriesSlice";
import CategoryItem from "./CategoryItem";
import TodoList from "./TodoList";

const CategoryList = () => {
  const categories = useSelector((state) => state.categories);
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addCategory({
        id: Date.now().toString(),
        name,
      })
    );
    setName("");
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category-list mt-4">
      <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Add a new category"
          className="flex-1 p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
          required
        />
        <button
          type="submit"
          className="py-2 px-4 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </form>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setSelectedCategory(null)}
          className="py-2 px-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
        >
          All Todos
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className="py-2 px-4 bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded"
          >
            {category.name}
          </button>
        ))}
      </div>
      {selectedCategory ? (
        <CategoryItem category={selectedCategory} />
      ) : (
        <TodoList categoryId={null} />
      )}
    </div>
  );
};

export default CategoryList;
