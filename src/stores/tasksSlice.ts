import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ITask, ITaskState } from "../types/Task";

const initialState: ITaskState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: {
      reducer: (state, action: PayloadAction<ITask>) => {
        state.tasks.push(action.payload);
      },
      prepare: (description: string): { payload: ITask } => ({
        payload: {
          uuid: uuidv4(),
          description,
        },
      }),
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.uuid !== action.payload);
    },
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
