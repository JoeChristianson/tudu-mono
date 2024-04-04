
const compareUserIds = (one:string,two:string)=>{
    if(!one||!two){
        return false
    }
    if(one.toString()!==two.toString()){
        return false
    }
    return true
}

export default compareUserIds