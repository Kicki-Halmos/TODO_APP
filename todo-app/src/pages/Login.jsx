import React from 'react';
import { useSelector } from 'react-redux';
import AuthForm from '../components/AuthForm';
import ErrorMessage from '../components/ErrorMessage';

const Login = () => {
  const errorMessage = useSelector((state) => state.user.errorMessage);

  return (
    <div>
      {errorMessage !== '' && <ErrorMessage msg={errorMessage} />}
      <AuthForm
        btnText="Login"
        linkText="Don't have an account? Signup!"
        linkTo="/signup"

      />
    </div>
  );
};

export default Login;
