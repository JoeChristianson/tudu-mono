import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { RootState } from "../../../../app/store"
import { editIntendedTask } from "../../../../features/taskadd/taskaddSlice"
import Button from "../../../Button"
import ButtonsContainer from "../../../containers/ButtonsContainer"
import Grid from "../../../containers/Grid"
import AddCategory from "./AddCategory"
import styles from "./index.module.scss"

type Props = {

}

const ManageCategories = ({}: Props) => {
    
    const dispatch = useAppDispatch()
    const state = useAppSelector((state:RootState)=>state)
    const categories = state.auth.credentials?.user.categories||[]
    const selectedCategories = state.taskAdd.intendedTask.categories

    const handleClick = (category:string)=>{
        const newCategories = new Set(selectedCategories)
        if(newCategories.has(category)){
            console.log("deleting")
            newCategories.delete(category)
        }else{
            newCategories.add(category)
        }
        dispatch(editIntendedTask({categories:Array.from(newCategories)}))
    }

    const sortedCategories = ([...categories]||[]).sort((a,b)=>{
        if(a>b){
            return 1
        }
        return -1
    })

    return <Grid>
        <ButtonsContainer>

        {sortedCategories.map((category,index)=>{
            
            const isSelected = (selectedCategories||[]).includes(category)
            return <div  key={index}>
                <Button selected={isSelected} onClick={()=>handleClick(category)}>{category}</Button></div>
        }
        
        )}
<AddCategory></AddCategory>
        </ButtonsContainer>
    </Grid>
}

export default ManageCategories