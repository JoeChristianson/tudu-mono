import Credentials from "../../types/Credentials";

const setLocalCredentials = ({credentials}:{credentials:Credentials})=>{
    localStorage.setItem("cred-3938203989",JSON.stringify(credentials))
}

export default setLocalCredentials