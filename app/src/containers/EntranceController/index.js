import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser, logoutUser} from "../../actions/userAction";

import User from '../../components/User';

class EntranceController extends Component {
  render() {
    const {user, loginUser, logoutUser} = this.props;
    return (
        <User name={user} loginUser={loginUser} logoutUser={logoutUser}/>
    )
  }
};

export default connect(state => ({
  user: state.name,
}), {loginUser, logoutUser})(EntranceController);