import React from "react";

import SignIn from "../../components/sign-in/SignIn";
import SignUp from "../../components/sign-up/SignUp";

import styled from "styled-components";

const SignInAndSignUpPage = () => {
  return (
    <SignInAndSignUpPageContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpPageContainer>
  );
};
const SignInAndSignUpPageContainer = styled.div`
  width: 950px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

export default SignInAndSignUpPage;
