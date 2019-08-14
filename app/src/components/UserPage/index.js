import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FriendList from '../FriendList';

import './styles.css';

export default class UserPage extends Component {
  componentDidMount() {
    const { getFriendsFromVK } = this.props;
    // количество друзей, которых необходимо вывести
    const friendsCount = 5;
    getFriendsFromVK(friendsCount);
  }

  render() {
    const {
      name, storageName, logoutUser, friendList, isLoading,
    } = this.props;
    return (
      <section className="user-page">
        <div className="wrapped-user-info">
          <div className="user-info">
            <h2>
            Привет, {name || storageName }!
            </h2>
            {storageName !== null ? (
              <button className="btn-logout" type="button" onClick={logoutUser}>
                Выход
                <i className="fas fa-sign-out-alt" />
              </button>
            ) : null}
          </div>
        </div>
        {isLoading
          ? <p>Загрузка...</p>
          : <FriendList friendList={friendList} />}
      </section>
    );
  }
}

UserPage.propTypes = {
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  storageName: PropTypes.string,
  getFriendsFromVK: PropTypes.func,
  logoutUser: PropTypes.func.isRequired,
  friendList: PropTypes.arrayOf(PropTypes.any),
};

UserPage.defaultProps = {
  getFriendsFromVK: () => {},
  storageName: '',
  friendList: [],
};
