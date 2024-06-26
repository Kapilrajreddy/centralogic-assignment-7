import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/todosSlice";
import TodoItem from "./TodoItem";

const TodoList = ({ categoryId }) => {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.categoryId === categoryId)
  );
  const [text, setText] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = new Date();
    console.log(currentDate)
    console.log(currentDate.toISOString(), currentDate.toTimeString());
    const date = currentDate.toISOString().split("T")[0];
    const time = currentDate.toTimeString().split(" ")[0].slice(0, 5);

    if (editingTodo) {
      dispatch(
        editTodo({
          id: editingTodo.id,
          text,
          date,
          time,
          categoryId,
        })
      );
      setEditingTodo(null);
    } else {
      dispatch(
        addTodo({
          id: Date.now().toString(),
          text,
          date,
          time,
          categoryId,
          completed: false,
        })
      );
    }
    setText("");
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setText(todo.text);
  };

  return (
    <div className="todo-list mt-4">
      <form onSubmit={handleSubmit} className="flex space-x-2 mb-4">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 p-2 border border-gray-300 rounded dark:bg-gray-800 dark:border-gray-600"
          required
        />
        <button
          type="submit"
          className="py-2 px-4 bg-green-500 text-white rounded"
        >
          {editingTodo ? "Update" : "Add"}
        </button>
      </form>
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
