import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Task from '../../types/Task';
import createNewTask from './helpers/createNewTask';
import setTaskAsComplete from './helpers/setTaskAsComplete';
import setNewId from './helpers/setNewId';
import fetchTasks from './api/fetchTasks';
import postCompleteTask from './api/postCompleteTask';
import generateTips from './api/generateTips';
import generateSubtasks from './api/generateSubtasks';
import getHighestPriority from './helpers/getHighestPriority';
import prioritizeTaskAPI from './api/prioritizeTaskAPI';
import toggleCategoryAPI from './api/toggleCategoryAPI';

interface TasksState {
  tasks:Task[]
  detailedTaskId:null|string
  loading:boolean
  error:null|string
  highestPriority:number
}

const initialState: TasksState = {
  tasks:[],
  detailedTaskId:null,
  loading:true,
  error:null,
  highestPriority:0
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addFullTask:(state,action)=>{
      const task = action.payload
      state.tasks = [...state.tasks,task]
    },
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
    deleteTask: (state,action)=>{
      const taskId = action.payload
      const tasks = [...state.tasks].filter(t=>t._id!==taskId)
      state.tasks = tasks
      
    },
    prioritizeTask: (state,action:PayloadAction<string>)=>{
      const taskId = action.payload
      const priority = state.highestPriority+1
      state.tasks = state.tasks.map((task)=>{
        if(task._id===taskId){
          return {...task,priority}
        }
        return {...task}
      })
      state.highestPriority = priority
      prioritizeTaskAPI({taskId,priority})
    },
    setDetailedTaskId: (state,action:PayloadAction<{id:string}>)=>{
      const {id} = action.payload
      state.detailedTaskId = id
    },
    setId: (state,action:PayloadAction<{id:string,newId:string}>)=>{
      const {tasks} = state
      const {id,newId} = action.payload
      state.tasks = setNewId({id,tasks,newId})
    },
    toggleCategory:(state,action)=>{
      const {taskId,category,selected} = action.payload
      const tasks = [...state.tasks].map((task)=>{
        if(task._id!==taskId){
          return task
        }
        let categories = task.categories
        if(selected){
          categories = categories?.filter(c=>c!==category)
        }
        else{
          categories?.push(category)
        }
        return {...task,categories}
      })
      state.tasks = tasks
      toggleCategoryAPI({taskId,category})
    }
    
  },
  extraReducers: (builder)=>
    builder.addCase(fetchTasks.pending,(state:TasksState)=>{
      state.loading = true
    })
    .addCase(fetchTasks.fulfilled, (state:TasksState,action)=>{
      state.loading = false
      const tasks = action.payload
      state.tasks = tasks
      state.highestPriority = getHighestPriority({tasks})  
    })
    .addCase(fetchTasks.rejected, (state:TasksState,action)=>{
      state.loading = false
      state.error = action.error.message||"undefined error"
      
    })
    .addCase(generateTips.pending,(state:TasksState,action)=>{
      state.loading = true
    })
    .addCase(generateTips.fulfilled,(state:TasksState,action)=>{
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
      state.tasks = state.tasks.map((task)=>{
        const isMatch = task._id===taskId
        if(!isMatch){
          return task
        }
        task.subTasks = subTasks
        return task
      })
    })
});

export const {addFullTask,addTask,completeTask,deleteTask,setId,setDetailedTaskId,prioritizeTask,toggleCategory } = tasksSlice.actions;
export default tasksSlice.reducer;