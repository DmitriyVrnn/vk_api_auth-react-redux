import React from 'react';

import './styles.css';

const Friend = ({first_name, last_name, photo, id}) => {
  return (
      <a className="link-user" href={`https://vk.com/id${id}`}>
        <h2 className="page-name">{`${first_name} ${last_name}`}</h2>
        <img className="photo" src={photo} alt=""/>
      </a>
  )
};

export default Friend;