import { Dispatch, createContext, useReducer } from "react";
import { Tasks, TasksAction } from "./shared.types";

const initialTasks: Tasks = [];
export const TasksContext = createContext([] as Tasks);
export const TasksDispatchContext = createContext<Dispatch<TasksAction>>(
  {} as Dispatch<TasksAction>
);

export default function TasksProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

function tasksReducer(state: Tasks, action: TasksAction): Tasks {
  switch (action.type) {
    case "ADD_TASK": {
      return [...state, action.payload];
    }
    case "DELETE_TASK": {
      return state.filter((task) => task.taskId !== action.payload.taskId);
    }
    case "TOGGLE_COMPLETE": {
      return state.map((task) => {
        if (task.taskId === action.payload.taskId) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }
        return task;
      });
    }
    case "UPDATE_TASK": {
      return state.map((task) => {
        if (task.taskId === action.payload.taskId) {
          return {
            ...task,
            task: action.payload.task,
          };
        }
        return task;
      });
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
