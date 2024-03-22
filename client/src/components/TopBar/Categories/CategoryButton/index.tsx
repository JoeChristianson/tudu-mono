import { useState } from "react"
import styles from "./index.module.scss"
import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { deselectCategory, selectCategory } from "../../../../features/categories/categoriesSlice"
import Button from "../../../Button"

type Props = {
category:string
}

const CategoryButton = ({category}: Props) => {
    
    const selectedCategories = useAppSelector(s=>s.categories.selectedCategories)
    const dispatch = useAppDispatch()
    const selected = selectedCategories.includes(category)
    const className = `${styles.button} ${selected?styles.selected:styles.deselected}`

    const handleClick = ()=>{
        
        if(!selected){
            dispatch(selectCategory(category))
            return
        }
        dispatch(deselectCategory(category))
    }

    return <Button selected={selected} onClick={handleClick} className={className}>
    {category}
    </Button>
}

export default CategoryButton