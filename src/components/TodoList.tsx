import useTasks from "../hooks/useTasks";
import { Tasks } from "../shared.types";
import { TodoItem } from "./Todo";

export default function TodoList() {
  const tasks: Tasks = useTasks();
  return (
    <ul className="flex flex-col gap-2">
      {tasks &&
        tasks.map((t) => {
          return (
            <TodoItem
              key={t.taskId}
              task={t.task}
              taskId={t.taskId}
              isCompleted={t.isCompleted}
            />
          );
        })}
    </ul>
  );
}
