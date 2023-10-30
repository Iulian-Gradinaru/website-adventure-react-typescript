import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps, STYLES, SIZES } from './Button.types';
import { StylesButton } from './Button.styles';

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  buttonStyle = STYLES[0],
  buttonSize = SIZES[0],
}) => {
  return (
    <Link to="/sign-up" className="btn-mobile">
      <StylesButton
        className={`btn ${buttonStyle} ${buttonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </StylesButton>
    </Link>
  );
};
