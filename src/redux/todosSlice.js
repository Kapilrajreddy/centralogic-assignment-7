import { createSlice } from "@reduxjs/toolkit";

const loadTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const todosSlice = createSlice({
  name: "todos",
  initialState: loadTodos(),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      saveTodos(state);
    },
    editTodo: (state, action) => {
      const { id, text, date, time, categoryId } = action.payload;
      const existingTodo = state.find((todo) => todo.id === id);
      
      if (existingTodo) {
        existingTodo.text = text;
        existingTodo.date = date;
        existingTodo.time = time;
        existingTodo.categoryId = categoryId;
        saveTodos(state);
      }
    },
    deleteTodo: (state, action) => {
      const newState = state.filter((todo) => todo.id !== action.payload);
      saveTodos(newState);
      return newState;
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      
      if (todo) {
        todo.completed = !todo.completed;
        saveTodos(state);
      }
    },
  },
});

export const { addTodo, editTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
