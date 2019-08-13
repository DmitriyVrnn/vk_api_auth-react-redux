import React, { Component } from 'react';

import FriendList from '../FriendList';

import './styles.css';

export default class UserPage extends Component {
  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { getFriendsFromVK } = this.props;
    const friendsCount = 5; // Количество друзей, которых необходимо вывести
    getFriendsFromVK(friendsCount);
  }

  render() {
    const {
      name, storageName, logoutUser, friendList,
    } = this.props;
    return (
      <section className="user-page">
        <div className="wrapped-user-info">
          <div className="user-info">
            <h2>
            Привет, { name || storageName }
            </h2>
            {storageName !== null ? (
              <button className="btn-logout" type="button" onClick={logoutUser}>
                Выход
                <i className="fas fa-sign-out-alt" />
              </button>
            ) : null}
          </div>
        </div>
        <FriendList friendList={friendList} />
      </section>
    );
  }
}
