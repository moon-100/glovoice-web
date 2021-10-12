import React from 'react';
import styled from 'styled-components';

const AdminSingin = () => {
  return (
    <Container>
      <ContentFrame>
        <Header>Welcome to Audio Crowd Sourcing</Header>
        <InputContainer>
          <InputContent type="text" placeholder="Email" />
          <InputContent type="password" placeholder="password" />
        </InputContainer>
        <SigninBtn>Login</SigninBtn>
      </ContentFrame>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const ContentFrame = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.h1``;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
const InputContent = styled.input`
  width: 600px;
  height: 40px;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid rgb(236, 236, 236);
  outline: none;
`;
const SigninBtn = styled.button`
  width: 300px;
  height: 40px;
  margin-top: 60px;
  border-radius: 5px;
  color: white;
  background-color: rgb(244, 180, 79);
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
export default AdminSingin;
