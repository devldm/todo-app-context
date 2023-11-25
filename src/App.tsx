import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="w-full max-h-screen flex flex-row items-center justify-center ">
      <div data-testid="app" className="w-[40%] max-h-screen">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
