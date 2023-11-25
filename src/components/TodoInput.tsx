import { useState } from "react";
import useTasksDispatch from "../hooks/useTasksDispatch";

type formState = {
  task: string;
};

export default function TodoInput() {
  const [formState, setFormState] = useState<formState>({
    task: "",
  } as formState);
  const dispatch = useTasksDispatch();

  return (
    <form data-testid="todo-input" className="py-6">
      <div className="w-full flex justify-between gap-2 flex-shrink-0">
        <input
          className="p-4 rounded-lg flex-1 border-2 border-gray-200 focus:outline-none"
          type="text"
          role="input"
          value={formState.task}
          required
          placeholder={"What needs to be done?"}
          onChange={(e) =>
            setFormState((prevState) => ({
              ...prevState,
              task: e.target.value,
            }))
          }
        />
        <button
          className="bg-slate-500 hover:bg-slate-700 text-white font-bold p-4 px-4 rounded"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            if (formState.task !== "") {
              dispatch({
                type: "ADD_TASK",
                payload: {
                  task: formState.task,
                  taskId: Math.random(),
                  isCompleted: false,
                },
              });
            }

            setFormState({ task: "" });
          }}
        >
          Add task
        </button>
      </div>
    </form>
  );
}
