import React, { Component } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log('error signing in ' + error.messsage);
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.value);
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            label="email"
            handleInputChange={this.handleInputChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="password"
            handleInputChange={this.handleInputChange}
            required
          />
          <div className="buttons">
            <Button type="submit">SIGN IN</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
