import { useSelector } from "react-redux";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const errorMessage = useSelector((state) => state.todo.errorMessage);
  console.log(errorMessage);
  return (
    <div>
      {errorMessage !== "" && <p>{errorMessage}</p>}
      <AuthForm
        btnText="Login"
        linkText="Don't have an account? Signup!"
        linkTo="/signup"
        
      />
    </div>
  );
};

export default Login;
