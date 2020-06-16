import React from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.state = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      };
    } catch (error) {
      console.error(error);
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form action="" className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleInputChange={this.handleInputChange}
            label="Display Name"
            required
          ></FormInput>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleInputChange={this.handleInputChange}
            label="Email"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="password"
            value={password}
            handleInputChange={this.handleInputChange}
            label="Password"
            required
          ></FormInput>
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleInputChange={this.handleInputChange}
            label="Confirm Password"
            required
          ></FormInput>
          <Button type="submit">Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;
