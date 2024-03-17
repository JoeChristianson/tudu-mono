import getLocalCredentials from "../localstorage/getLocalCredentials"

const getAPIAuth = ()=>{
    const credentials = getLocalCredentials()
    if(!credentials){
        return {}
    }
    return {
        userId:credentials.user._id,
        jwt:credentials.jwt
    }
}

export default getAPIAuth