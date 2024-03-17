const lib:any = {
    color:"Text Color",
    "--headingColor":"Heading Color",
    "Multiple Choice":"select",
    "multiple-choice":"select"
}

const t = (string:string)=>{
    if(lib[string]){
        return lib[string]
    }
    const result = string.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult
}

export default t