import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Friend = ({
  first_name, last_name,
}) => (
  <h2 className="page-name">{`${first_name} ${last_name}`}</h2>
);

export default Friend;

Friend.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
};
