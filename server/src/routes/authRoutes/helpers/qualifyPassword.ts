const qualifyPassword = (password:string)=>{
    if(password.length<8){
        return {
            qualified:false,
            message:"Password must be 8 characters or more"
        }
    }
    if(!/\d/.test(password)){
        return{
            qualified:false,
            message:"Password must contain a number"
        }
    }
    if(!/\d/.test(password)){
        return{
            qualified:false,
            message:"Password must contain a letter"
        }
    }
    if(!/[^a-zA-Z0-9]/.test(password)){
        return{
            qualified:false,
            message:"Password must contain a special character"
        }
    }
    return {
        success:true,
        message:"Password qualifies."
    }
}

export default qualifyPassword