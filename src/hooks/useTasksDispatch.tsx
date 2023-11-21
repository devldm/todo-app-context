import { useContext } from "react";
import { TasksDispatchContext } from "../TasksContext";

export default function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
