import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Task from '../../types/Task';
import createNewTask from './helpers/createNewTask';
import setTaskAsComplete from './helpers/setTaskAsComplete';
import setNewId from './helpers/setNewId';
import fetchTasks from './api/fetchTasks';
import postCompleteTask from './api/postCompleteTask';
import generateTips from './api/generateTips';
import generateSubtasks from './api/generateSubtasks';

interface TasksState {
  tasks:Task[]
  detailedTaskId:null|string
  loading:boolean
  error:null|string
}

const initialState: TasksState = {
  tasks:[],
  detailedTaskId:null,
  loading:true,
  error:null
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action:PayloadAction<{name:string,id:string}>)=>{
        const {id,name} = action.payload
        const newTask = createNewTask({name,_id:id})
        state.tasks = [...state.tasks,newTask]
    },
    completeTask: (state,action:PayloadAction<string>)=>{
      const {tasks} = state
      const id = action.payload
      state.tasks = setTaskAsComplete({_id:id,tasks})
      postCompleteTask({taskId:id})
    },
    setDetailedTaskId: (state,action:PayloadAction<{id:string}>)=>{
      const {id} = action.payload
      state.detailedTaskId = id
    },
    setId: (state,action:PayloadAction<{id:string,newId:string}>)=>{
      const {tasks} = state
      const {id,newId} = action.payload
      state.tasks = setNewId({id,tasks,newId})
    }
  },
  extraReducers: (builder)=>
    builder.addCase(fetchTasks.pending,(state:TasksState)=>{
      state.loading = true
    })
    .addCase(fetchTasks.fulfilled, (state:TasksState,action)=>{
      state.loading = false
      state.tasks = action.payload
    })
    .addCase(fetchTasks.rejected, (state:TasksState,action)=>{
      state.loading = false
      state.error = action.error.message||"undefined error"
    })
    .addCase(generateTips.pending,(state:TasksState,action)=>{
      state.loading = true
    })
    .addCase(generateTips.fulfilled,(state:TasksState,action)=>{
      console.log({payload:action.payload})
      const {taskId,resources,tips_and_tricks} = action.payload
      state.tasks = state.tasks.map((task)=>{
        const isMatch = task._id===taskId
        if(!isMatch){
          return task
        }
        return {...task,resources,tips_and_tricks}
      })
      state.loading = false
      state.detailedTaskId = taskId
    })
    .addCase(generateTips.rejected,(state:TasksState,action)=>{
      state.loading = false
    })
    .addCase(generateSubtasks.fulfilled,(state:TasksState,action:any)=>{
      const {subTasks,taskId} = action.payload
      console.log("in case",{subTasks,taskId})
      state.tasks = state.tasks.map((task)=>{
        const isMatch = task._id===taskId
        if(!isMatch){
          return task
        }
        task.subTasks = subTasks
        return task
      })
      console.log(state.tasks)
    })
});

export const {addTask,completeTask,setId,setDetailedTaskId } = tasksSlice.actions;
export default tasksSlice.reducer;
