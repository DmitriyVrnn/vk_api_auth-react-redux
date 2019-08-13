import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser, logoutUser, getFriendsFromVK} from "../../actions/userAction";

import User from '../../components/User';

class EntranceController extends Component {
  render() {
    const {user, loginUser, logoutUser, getFriendsFromVK, friendList} = this.props;
    return (
        <User name={user}
              loginUser={loginUser}
              logoutUser={logoutUser}
              getFriendsFromVK={getFriendsFromVK}
              friendList={friendList}/>
    )
  }
};

export default connect(state => ({
  user: state.name,
  friendList: state.friendList
}), {loginUser, logoutUser, getFriendsFromVK})(EntranceController);