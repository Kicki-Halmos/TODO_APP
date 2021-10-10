import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { postLogin, postSignup, clearErrorMessage } from "../store/user-actions";


const AuthForm = ({ btnText, linkText, linkTo }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const clearError = () => {
    dispatch(clearErrorMessage());
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value.trim());
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value.trim());
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if (linkTo === "/signup") {
      dispatch(postLogin(email, password));
    } else {
      dispatch(postSignup(email, password));
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md space-x-4 ">
      <form onSubmit={formSubmitHandler}>
        <div className="grid grid-cols-1">
          <label className="ml-2" htmlFor="email">
            Email
          </label>
          <input
            className="m-2 p-2 border-2 rounded-lg"
            type="email"
            id="email"
            name="email"
            onChange={emailChangeHandler}
            value={email}
          />

          <label className="ml-2" htmlFor="password">
            Password
          </label>
          <input
            className="m-2 p-2 border-2 rounded-lg"
            type="password"
            id="password"
            name="password"
            onChange={passwordChangeHandler}
            value={password}
          />
       
        <input
          className="py-2 px-4 m-2 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 cursor-pointer"
          type="submit"
          value={btnText}
        />
        <Link to={linkTo}>
          <button onClick={clearError}className="text-green-600 text-bold pl-3">{linkText}</button>
        </Link>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
