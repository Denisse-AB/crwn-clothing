import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sign-in-and-up.scss';

const SignInAndUp = () => (
  <div className='tablet:flex laptop:flex'>
    <SignIn />
    <SignUp />
  </div>
)

export default SignInAndUp;
