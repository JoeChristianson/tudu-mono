const getLocalCredentials = ()=>{
    const credentialsString = localStorage.getItem("cred-3938203989")
    if(!credentialsString){
        return null
    }
    const credentials = JSON.parse(credentialsString)
    return credentials
}

export default getLocalCredentials