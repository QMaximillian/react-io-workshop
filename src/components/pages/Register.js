import React from 'react';
import {FormContainer, PageContainer} from "../shared/Layout";

const Register = () => {
  return (
      <PageContainer>
        <h1>Register</h1>
        <FormContainer>
          <input type="text" placeholder={"Your full name..."}/>
          <input type="text" placeholder={"Your email..."}/>
          <input type="password" placeholder={"Your password..."}/>
          <button>Register</button>
        </FormContainer>
      </PageContainer>
  );
};

export default Register;