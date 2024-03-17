import { useAppSelector } from "../../app/hooks"
import Login from "./Login"
import Register from "./Register"
import styles from "./index.module.scss"

type Props = {

}

const Auth = ({}: Props) => {
    
    const authIntention = useAppSelector(s=>s.auth.authIntention)

    if(authIntention==="login"){
        return<Login></Login>
    }
    return<Register></Register>

}

export default Auth