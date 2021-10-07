import { useSelector } from "react-redux";
import AuthForm from "../components/AuthForm"

const Signup = () => {
    const errorMessage = useSelector((state)=> state.todo.errorMessage);
    console.log(errorMessage)
    return (
        <div>
    {errorMessage !== "" && <p>{errorMessage}</p>}
    <AuthForm 
    btnText="Signup"
    linkText="Already have an account? Login!"
    linkTo="/login"
    />
    </div>
    )
}

export default Signup;