import React from 'react';

import Friend from '../Friend';

const FriendList = ({friendList}) => {
  return (
      <ul className="list-users">
        <h1 className="list-title">Список друзей</h1>
        {friendList.map((user) => {
          return (
                <li
                    className="list-item"
                    key={user.id}
                >
                  <Friend
                      first_name={user.first_name}
                      last_name={user.last_name}
                      photo={user.photo_200}
                  />
                </li>
          );
        })}
      </ul>
  )
};

export default FriendList;