import React from 'react';
import styled from 'styled-components';
import NavSide from './NavSide';

const Nav = () => {
  return (
    <Container>
      <TopContainer>
        <TopHeader>BI</TopHeader>
        <TopSignBtn>Logout</TopSignBtn>
      </TopContainer>
      <SideContainer>
        <NavSide />
      </SideContainer>
    </Container>
  );
};
const Container = styled.div``;
const TopContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-bottom: 2px solid rgb(230, 230, 230);
`;
const TopHeader = styled.div`
  width: 200px;
  text-align: center;
  line-height: 60px;
  background-color: rgb(239, 239, 239);
  font-size: 20px;
`;
const TopSignBtn = styled.button`
  width: 100px;
  border: none;
  background-color: rgb(239, 239, 239);
  font-size: 18px;
`;
const SideContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 200px;
  height: 100%;
  border-right: 2px solid rgb(230, 230, 230);
`;
export default Nav;
