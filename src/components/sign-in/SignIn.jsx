import React, { Component } from "react";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import styled from "styled-components";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error.message);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </SignInContainer>
    );
  }
}

const SignInContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  h2 {
    margin: 10px 0;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export default SignIn;
