import useTasksDispatch from "../hooks/useTasksDispatch";
import { Task } from "../shared.types";

export function TodoItem(task: Task) {
  const dispatch = useTasksDispatch();

  return (
    <div>
      <p>{task.task}</p>
      <button>edit</button>
      <button
        onClick={() => {
          dispatch({
            type: "DELETE_TASK",
            payload: task,
          });
        }}
      >
        delete
      </button>
    </div>
  );
}
