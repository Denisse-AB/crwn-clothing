import React from "react";
import FormInput from "../form-input/from-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import './sign-in.scss';


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSumit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = event => {
    const {value, name } = event.target;

    this.setState({[name]: value});
  }

  render() {
    return(
      <div className="sign-in">
        <h2>I already have and account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSumit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          {/* isGoogleSignIn is a style binding that will change
           the color depending if the user is sign in or not */}
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={ signInWithGoogle } isGoogleSignIn>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn;