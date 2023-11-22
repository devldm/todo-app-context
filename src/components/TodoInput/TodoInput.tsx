import { useState } from "react";
import useTasksDispatch from "../../hooks/useTasksDispatch";
import styles from "./TodoInput.module.css";

type formState = {
  task: string;
};

export default function TodoInput() {
  const [formState, setFormState] = useState<formState>({} as formState);
  const dispatch = useTasksDispatch();

  return (
    <form data-testId="todo-input">
      <input
        className={styles.input}
        type="text"
        role="input"
        value={formState.task}
        required
        placeholder={"What needs to be done?"}
        onChange={(e) =>
          setFormState((prevState) => ({ ...prevState, task: e.target.value }))
        }
      />
      <button
        className={styles.button}
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
        Add todo
      </button>
    </form>
  );
}
