import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  maxTasks: 20,
  tasks: [
    { id: 1, task: "Pick up new glasses", completed: true },
    { id: 2, task: "Buy airco", completed: false },
    { id: 3, task: "Take packages to return", completed: false },
    { id: 4, task: "Order dog food", completed: true },
    { id: 5, task: "Buy kiwies", completed: false },
    { id: 6, task: "Do Codaisseur homework", completed: false },
    { id: 7, task: "Pass Final Assessment", completed: false },
  ],
  showCompletedTasks: false,
};

export const pizzaSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { task } = action.payload;
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        task,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    completeTask: (state, action) => {
      const id = action.payload;
      state.tasks[id - 1].completed = true;
    },
    deleteTask: (state, action) => {},
  },
});

export const { addTask, completeTask, deleteTask } = pizzaSlice.actions;

export default pizzaSlice.reducer;
