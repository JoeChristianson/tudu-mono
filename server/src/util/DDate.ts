const DDate = (date?:(Date|null))=>{
    if(!date){
        const todayAtMidnight = new Date()
        return todayAtMidnight.setHours(0, 0, 0, 0);
    }
    return date.setHours(0,0,0,0)
}

export default DDate