import React from 'react';

const Friend = ({first_name, last_name, photo}) => {
  return (
      <>
        <span>{first_name}</span>
        <span>{last_name}</span>
        <img src={photo} alt=""/>
      </>
  )
};

export default Friend;