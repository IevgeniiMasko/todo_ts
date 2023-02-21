import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Tasks {
  id: number;
  name: string;
  isDone: boolean;
  creationDate: Date;
}

const initialState: Tasks[] = [];

export const counterSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    save_tasks: (state, action: PayloadAction<Tasks[]>) => {
      state = [...action.payload];
    },
    create_task: (state, action: PayloadAction<Tasks>) => {
      state.push(action.payload);
    },
    complete_task: (state, action: PayloadAction<{ id: number }>) => {
      state.map((task) => {
        return task.id! === action.payload.id ? { ...task, id: !task.id } : task;
      });
    },
    delete_task: (state, action: PayloadAction<{ id: number }>) => {
      state.filter((task) => task.id! !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { save_tasks, create_task, complete_task, delete_task } = counterSlice.actions;

export default counterSlice.reducer;
