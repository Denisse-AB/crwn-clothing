import React from "react";

import './sign-in.scss';


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSumit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
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
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <label>Email</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <label>Password</label>

          <input type="submit" value='Submit Form' />
        </form>
      </div>
    )
  }
}

export default SignIn;