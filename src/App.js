import React, { useContext } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import CategoryList from "./components/CategoryList";
import { ThemeProvider, ThemeContext } from "./contexts/ThemeContext";
import "./App.css";
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";


const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`py-2 px-4 ${
        isDarkMode ? "bg-yellow-500" : "bg-black"
      } text-white rounded`}
      onClick={toggleTheme}
    >
      {isDarkMode ? <MdSunny/>: <IoIosMoon/> }
    </button>
  );
};

const AppContent = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? "dark" : "light"} h-screen`}>
      <div className="app container mx-auto p-4 bg-white dark:bg-gray-900 text-black dark:text-white">
        <h1 className="text-2xl font-bold text-center mb-4">
          Todo Application
        </h1>
        <ThemeToggle />
        <CategoryList />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
