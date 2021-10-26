import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/user-actions';

const Nav = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className="fixed bg-gray-400 w-screen p-4 flex justify-between">
      <a href="/" className="font-extrabold text-xl ">TODO APP</a>
      {token && <button type="button" className="" onClick={logoutHandler}>Logout</button>}
    </div>
  );
};

export default Nav;
