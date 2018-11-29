import React from 'react';
import PropTypes from 'prop-types';

const Button = props =>
  props.show ? (
    <button style={props.style} onClick={props.handleClick}>
      {props.children}
    </button>
  ) : (
    false
  );

Button.propTypes = {
  children: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  show: PropTypes.bool,
  style: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
    color: PropTypes.string,
    background: PropTypes.string,
    borderRadius: PropTypes.number
  })
};

export default Button;
