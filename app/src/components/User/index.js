import React from 'react';

const User = ({name, loginUser, logoutUser}) => {
  const storageName = localStorage.getItem('name');
  if (name || storageName) {
    return (
        <>
          <p>Привет, {name || storageName}</p>
          <button onClick={logoutUser}>Выход</button>
        </>
    )
  } else {
    return (
        <button onClick={loginUser}>Войти</button>
    )
  }
};

export default User;