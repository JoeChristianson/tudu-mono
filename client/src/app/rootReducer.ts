// src/app/rootReducer.ts
import { combineReducers } from 'redux';
import tasksReducer from "../features/tasks/tasksSlice"
import authReducer from "../features/auth/authSlice"
import modalReducer from "../features/modal/modalSlice"

const rootReducer = combineReducers({
  tasks:tasksReducer,
  auth:authReducer,
  modal:modalReducer

});

export default rootReducer;
