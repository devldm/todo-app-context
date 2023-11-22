import "./App.css";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList";
import useFetch from "./hooks/useFetch";

function App() {
  const { fetchedData, isLoading } = useFetch("https://api.kanye.rest/");

  return (
    <div data-testid="app">
      <p>{isLoading ? "" : fetchedData}</p>
      <h1>Todo's</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
