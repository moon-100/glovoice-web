import React from 'react';
import styled from 'styled-components';
import NavSide from './NavSide';

interface Iprops {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Nav = ({ setPage }: Iprops) => {
  return (
    <Container>
      <TopContainer>
        <TopHeader>BI</TopHeader>
        <TopSignBtn>Logout</TopSignBtn>
      </TopContainer>
      <SideContainer>
        <NavSide setPage={setPage} />
      </SideContainer>
    </Container>
  );
};

const Container = styled.div`
  z-index: 10001;
`;

const TopContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid rgb(230, 230, 230);
  background-color: white;
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
  background-color: white;
`;

export default Nav;
