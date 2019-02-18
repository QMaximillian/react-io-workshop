import React from 'react';
import {FormContainer, PageContainer} from "../shared/Layout";
import {StyledLink} from "../shared/StyledLink";


const Login = () => {
  return (
      <PageContainer>
        <h1>Login</h1>
        <FormContainer>
          <input type="text" placeholder={"Your email..."}/>
          <input type="password" placeholder={"Your password..."}/>
          <button>Login</button>
          <p>don't have an account? <StyledLink to={'/register'}>Register</StyledLink></p>
        </FormContainer>
      </PageContainer>
  );
};

export default Login;