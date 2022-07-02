import React from 'react';

import { CustomButtonContainer } from './custom-button-style';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer
    className='mt-2 sm:mx-auto sm:w-1 sm:p-0'
    {...props}>{children}
  </CustomButtonContainer>
);

export default CustomButton;

/*
Before using style-components

import './custom-button.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
  <button
    className={`${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)
*/
