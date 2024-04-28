export type ITask = {
  uuid: string;
  description: string;
};

export interface ITaskState{
    tasks: ITask[]
}