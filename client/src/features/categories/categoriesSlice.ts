import { createSlice } from "@reduxjs/toolkit"




interface CategoriesState {
    selectedCategories:string[]
}

const initialState:CategoriesState = {
    selectedCategories:[]
}

const categoriesSlice = createSlice({
    name:"categories",
    initialState,
    reducers:{
        selectCategory:(state,action)=>{
            const category:string = action.payload
            if(!state.selectedCategories.includes(category))
            {
                state.selectedCategories = [category]
            }
        },
        deselectCategory:(state,action)=>{
            const category = action.payload
            state.selectedCategories = [...state.selectedCategories].filter((selectedCategory)=>{
                return selectedCategory!==category
            })
        }
    }
})

export const {selectCategory,deselectCategory} = categoriesSlice.actions
export default categoriesSlice.reducer