import { useAppDispatch } from "../../../app/hooks"
import login from "../../../features/auth/api/login"
import { setAuthIntention } from "../../../features/auth/authSlice"
import Button from "../../Button"
import Main from "../../Main"
import Form from "../../generics/Form"

type Props = {

}

const Login = ({}: Props) => {
    
    const dispatch = useAppDispatch()

    const fields = [
        {name:"email"},
        {name:"password",type:"password"}
    ]
    
    const handleSubmit = (values:any)=>{
        const {email,password} = values
        dispatch(login({email,password}))
    }

    const handleRegisterButton = ()=>{
        dispatch(setAuthIntention({authIntention:"register"}))
    }

    return <Main>
        <Form
    fields={fields}    
    handleSubmit={handleSubmit}
    ></Form>
    <Button onClick={handleRegisterButton}>Register</Button>
    </Main>
}

export default Login