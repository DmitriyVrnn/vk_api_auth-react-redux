import React from 'react';
import {connect} from 'react-redux';
import {loginUser, logoutUser, getFriendsFromVK} from "../../actions/userAction";

import UserPage from '../../components/UserPage';

import './styles.css';

const EntranceController = ({user, loginUser, logoutUser, getFriendsFromVK, friendList}) => {
  const getStorageName = localStorage.getItem('name');
  if (user || getStorageName) {
    return (
        <UserPage name={user}
                  storageName={getStorageName}
                  logoutUser={logoutUser}
                  friendList={friendList}
                  getFriendsFromVK={getFriendsFromVK}/>
    )
  } else
    return (
        <div className="btn-wrapped">
          <button className="btn-login" onClick={loginUser}>
            <span><i className="fab fa-vk"></i></span>
            Войти
          </button>
        </div>
    )
};

export default connect(state => ({
  user: state.name,
  friendList: state.friendList
}), {loginUser, logoutUser, getFriendsFromVK})(EntranceController);
