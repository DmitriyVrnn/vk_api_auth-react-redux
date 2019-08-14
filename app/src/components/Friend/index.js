import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Friend = ({
  first_name, last_name, photo, id,
}) => (
  <a className="link-user" href={`https://vk.com/id${id}`}>
    <h2 className="page-name">{`${first_name} ${last_name}`}</h2>
    <img className="photo" src={photo} alt={first_name} />
  </a>
);

export default Friend;

Friend.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
