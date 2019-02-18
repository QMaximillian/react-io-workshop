import React from 'react';
import {StyledLink} from "../shared/StyledLink";
import {PageContainer} from "../shared/Layout";



const Home = () => {
  return (
      <PageContainer>
        <h1>Welcome To Places to eat!</h1>
        <StyledLink to={'/'}>LOG IN</StyledLink>
        <StyledLink to={'/'}>REGISTER</StyledLink>
      </PageContainer>
  );
};

export default Home;