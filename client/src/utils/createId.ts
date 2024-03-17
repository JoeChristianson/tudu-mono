const createId = ()=>{
    const id = Math.random().toString().replace(".","")
    return id
}

export default createId