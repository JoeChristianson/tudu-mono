// src/app/rootReducer.ts
import { combineReducers } from 'redux';
import tasksReducer from "../features/tasks/tasksSlice"
import authReducer from "../features/auth/authSlice"
import modalReducer from "../features/modal/modalSlice"
import categoriesReducer from "../features/categories/categoriesSlice"
import taskAddReducer from "../features/taskadd/taskaddSlice"
const rootReducer = combineReducers({
  tasks:tasksReducer,
  auth:authReducer,
  modal:modalReducer,
  categories:categoriesReducer,
  taskAdd:taskAddReducer
});

export default rootReducer;
