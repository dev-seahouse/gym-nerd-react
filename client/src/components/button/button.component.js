import React from 'react';

import './button.styles.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? 'inverted' : ''}  ${
      isGoogleSignIn ? 'is-google-sign-in' : ''
    } button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
