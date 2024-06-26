import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todosSlice";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";


const TodoItem = ({ todo, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div className="todo-item flex items-center justify-between p-2 border-b border-gray-200 dark:border-gray-700">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        className="mr-2 cursor-pointer"
      />
      <span className={`todo-text ${todo.completed ? "line-through text-red-600" : ""}`}>
        {todo.text}
      </span>
      <span className="todo-date-time text-sm text-gray-500 dark:text-gray-400 ml-4">{`${todo.date} ${todo.time}`}</span>
      <button className="ml-2 text-blue-500" onClick={() => onEdit(todo)}>
        <FiEdit/>
      </button>
      <button className="ml-2 text-red-500" onClick={handleDelete}>
        <MdOutlineDeleteOutline className="text-xl"/>
      </button>
    </div>
  );
};

export default TodoItem;
