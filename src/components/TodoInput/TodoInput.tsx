import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import useTasksDispatch from "../../hooks/useTasksDispatch";

type formState = {
  task: string;
};

export default function TodoInput() {
  const [formState, setFormState] = useState<formState>({} as formState);
  const dispatch = useTasksDispatch();

  return (
    <form>
      <TextField
        id="outlined-basic"
        value={formState.task}
        label="Add a todo"
        variant="outlined"
        required
        placeholder={"What needs to be done?"}
        onChange={(e) =>
          setFormState((prevState) => ({ ...prevState, task: e.target.value }))
        }
      />
      <Button
        variant="contained"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD_TASK",
            payload: {
              task: formState.task,
              taskId: Math.random(),
              isCompleted: false,
            },
          });
          setFormState({ task: "" });
        }}
      >
        Add todo
      </Button>
    </form>
  );
}
