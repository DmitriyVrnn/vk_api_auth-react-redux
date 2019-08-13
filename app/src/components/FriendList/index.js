import React from 'react';

import Friend from '../Friend';

import './styles.css';

const FriendList = ({friendList}) => {
  return (
      <>
        <h1 className="title">Список друзей</h1>
        <ul className="list-friends">
          {friendList.map((user) => {
            return (
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
            );
          })}
        </ul>
      </>
  )
};

export default FriendList;