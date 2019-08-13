import React from 'react';

import UserPage from '../UserPage';

const User = ({name, loginUser, logoutUser, getFriendsFromVK, friendList}) => {
  const storageName = localStorage.getItem('name');
  if (name || storageName) {
    return (
        <>
          <UserPage name={name}
                    storageName={storageName}
                    logoutUser={logoutUser}
                    getFriendsFromVK={getFriendsFromVK}
                    friendList={friendList}/>
        </>
    )
  } else {
    return (
        <button onClick={loginUser}>Войти</button>
    )
  }
};

export default User;