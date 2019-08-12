import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from "../../actions/userAction";

import User from '../../components/User';

class EntranceController extends Component {
  render() {
    const {user, loginUser} = this.props;
    return (
        <User name={user} loginUser={loginUser}/>
    )
  }
};

export default connect(state => ({
  user: state.name,
}), {loginUser})(EntranceController);