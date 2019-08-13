import React, {Component} from 'react';

import FriendList from '../FriendList';

export default class UserPage extends Component {
  componentDidMount() {
    const {getFriendsFromVK} = this.props;
    getFriendsFromVK(5)
  };

  render() {
    const {name, storageName, logoutUser, friendList} = this.props;
    return (
        <>
          <p>Привет, {name || storageName}</p>
          <FriendList friendList={friendList}/>
          <button onClick={logoutUser}>Выход</button>
        </>
    )
  }
}