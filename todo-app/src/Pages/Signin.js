import { useSelector } from "react-redux";
import AuthForm from "../components/AuthForm"

const Signin = () => {
    const errorMessage = useSelector((state)=> state.todo.errorMessage);
    console.log(errorMessage)
    return (
        <div>
    {errorMessage !== "" && <p>{errorMessage}</p>}
    <AuthForm />
    </div>
    )
}

export default Signin;