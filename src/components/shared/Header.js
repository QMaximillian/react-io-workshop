import React from 'react';
import styled from '@emotion/styled';
import {StyledLink} from "./StyledLink";
import {useAuth} from "../../hooks/use-auth";

const Header = () => {
  const {logOut} = useAuth();

  return (
      <HeaderContainer>
        <div>Places to eat</div>
        <StyledLink to={'/'} onClick={logOut}>Logout</StyledLink>
      </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;  
  margin-bottom: 15px;
  padding: 15px;
`;

export default Header;
