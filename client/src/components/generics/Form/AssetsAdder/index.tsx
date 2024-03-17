import "./index.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

    type Props = {
        assets:string[]
        setAssets:React.Dispatch<string[]>
        isAdding:boolean
        setIsAdding:React.Dispatch<boolean>
    }

    const AssetsAdder = ({assets,setAssets,isAdding,setIsAdding}:Props)=>{

        const added = "https://www.wikihow.com/images/thumb/4/4b/Find-the-URL-of-a-Website-Step-1-Version-3.jpg/aid9934182-v4-728px-Find-the-URL-of-a-Website-Step-1-Version-3.jpg.webp"

        const handleAdd = ()=>{
            setAssets([...assets,added])
        }

        return(
            <div>
                <div className="assets-thumbnails">
                    {assets.map((asset,index)=>{
                        return<img src={asset} key={index}></img>
                    })}
                    <AddToggle
                    assets={assets}
                    setAssets={setAssets}
                    isAdding={isAdding}
                    setIsAdding={setIsAdding}
                    ></AddToggle>
                </div>
            </div>
        
        
            )
    }
    export default AssetsAdder
    
    
function AddToggle({assets,setAssets,isAdding,setIsAdding}:Props){

    if(!isAdding){

        return(
            <div
            onClick={()=>setIsAdding(true)}
            className="add-box"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></div>
            )
        }
        return<></>
}