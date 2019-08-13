import React from 'react';

import './styles.css';

// eslint-disable-next-line react/prop-types
const Friend = ({
  first_name, last_name, photo, id,
}) => (
  <a className="link-user" href={`https://vk.com/id${id}`}>
    <h2 className="page-name">{`${first_name} ${last_name}`}</h2>
    <img className="photo" src={photo} alt={first_name} />
  </a>
);

export default Friend;
