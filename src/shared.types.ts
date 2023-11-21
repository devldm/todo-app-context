export type Task = {
  taskId: number;
  task: string;
  isCompleted: boolean;
};

export type Tasks = Task[];

export type TasksAction = {
  payload: Task;
  type: string;
};
