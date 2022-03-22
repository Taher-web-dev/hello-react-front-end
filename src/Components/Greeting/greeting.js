import React from 'react';
import PropTypes from 'prop-types';

const Greeting = (props) => {
  const { message } = props;
  return (
    <p>{message}</p>
  );
};

Greeting.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Greeting;
