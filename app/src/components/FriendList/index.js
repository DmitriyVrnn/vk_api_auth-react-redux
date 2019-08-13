import React from 'react';

import Friend from '../Friend';

import './styles.css';

// eslint-disable-next-line react/prop-types
const FriendList = ({ friendList }) => (
  <>
    <h1 className="title">Список друзей</h1>
    <ul className="list-friends">
      {/* eslint-disable-next-line react/prop-types */}
      {friendList.map((user) => (
        <li
          className="list-friends-item"
          key={user.id}
        >
          <Friend
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            photo={user.photo_200}
          />
        </li>
      ))}
    </ul>
  </>
);

export default FriendList;
