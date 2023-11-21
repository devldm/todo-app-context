import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TasksProvider from "./TasksContext";
import TodoList from "./components/TodoList";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TasksProvider>
        <CssBaseline />
        <h1>Todo's</h1>
        <TodoInput />
        <TodoList />
      </TasksProvider>
    </ThemeProvider>
  );
}

export default App;
