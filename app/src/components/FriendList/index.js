import React from 'react';
import PropTypes from 'prop-types';

import Friend from '../Friend';

import './styles.css';

const FriendList = ({ friendList }) => (
  <>
    <h1 className="title">Список друзей</h1>
    <ul className="list-friends">
      {friendList.map((user) => (
        <li
          className="list-friends-item"
          key={user.id}
        >
          <Friend
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
          />
        </li>
      ))}
    </ul>
  </>
);
export default FriendList;

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(PropTypes.any),
};

FriendList.defaultProps = {
  friendList: [],
};
