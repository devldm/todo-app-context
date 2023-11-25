import useTasksDispatch from "../hooks/useTasksDispatch";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/solid";

import { Task } from "../shared.types";

export function TodoItem(task: Task) {
  const dispatch = useTasksDispatch();

  return (
    <div
      className={`flex flex-row justify-between items-center w-full px-2 py-4 border-2 border-gray-200 rounded-lg min-w-full gap-6 break-all ${
        task.isCompleted ? "line-through bg-slate-200" : "bg-white"
      }`}
    >
      <p>{task.task}</p>
      <div className="flex-0 min-w-max gap-2 flex">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch({
              type: "TOGGLE_COMPLETE",
              payload: task,
            });
          }}
        >
          <CheckIcon className="h-6 w-6" />
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            dispatch({
              type: "DELETE_TASK",
              payload: task,
            });
          }}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
