import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="header">
      <h1>Course Enrollment System</h1>
      <div className="user-info">
        {user && (
          <>
            <span>Welcome, {user.username}</span>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
