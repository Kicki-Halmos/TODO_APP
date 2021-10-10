import { useSelector } from "react-redux";
import AuthForm from "../components/AuthForm"
import ErrorMessage from "../components/ErrorMessage"

const Signup = () => {
    const errorMessage = useSelector((state)=> state.user.errorMessage);
    console.log(errorMessage)
    return (
        <div>
    {errorMessage !== "" && <ErrorMessage msg={errorMessage}/>}
    <AuthForm 
    btnText="Signup"
    linkText="Already have an account? Login!"
    linkTo="/login"
    />
    </div>
    )
}

export default Signup;