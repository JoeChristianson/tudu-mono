// src/app/rootReducer.ts
import { combineReducers } from 'redux';
import tasksReducer from "../features/tasks/tasksSlice"
import authReducer from "../features/auth/authSlice"


const rootReducer = combineReducers({
  tasks:tasksReducer,
  auth:authReducer
});

export default rootReducer;
