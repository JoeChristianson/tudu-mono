import { useAppDispatch } from "../../../app/hooks"
import register from "../../../features/auth/api/register"
import Form from "../../generics/Form"

type Props = {

}

const Register = ({}: Props) => {
    
    const dispatch = useAppDispatch()

    const fields = [
        {name:"name"},
        {name:"email"},
        {name:"password",type:"password"},
        {name:"confirmPassword",type:"password"}
    ]
    
    const handleSubmit = (values:any)=>{
        const {email,password,confirmPassword,name} = values
        dispatch(register({email,password,confirmPassword,name}))
    }

    return <Form
    fields={fields}    
    handleSubmit={handleSubmit}
    ></Form>
}

export default Register