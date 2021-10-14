import React from 'react';
import styled from 'styled-components';

const AdminSingin = () => {
  return (
    <Container>
      <ContentFrame>
        <Logo alt="Logo" src="/images/logo_glo_voice.png" />
        <InputContainer>
          <InputText>Username</InputText>
          <InputBox type="text" placeholder="Your Email" />
          <InputText>Password</InputText>
          <InputBox type="password" placeholder="Your Password" />
        </InputContainer>
        <SigninBtn>LOG IN</SigninBtn>
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

const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const InputText = styled.div`
  margin-top: 20px;
  font-size: 15px;
  font-weight: bold;
`;

const InputBox = styled.input`
  width: 350px;
  height: 45px;
  margin: 10px 0;
  padding-left: 20px;
  border: 2px solid rgb(159, 183, 246);
  border-radius: 5px;
  font-size: 12px;
`;

const SigninBtn = styled.button`
  width: 250px;
  height: 40px;
  margin-top: 20px;
  border-radius: 20px;
  color: white;
  background-color: ${({ theme }) => theme.color.blue};
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export default AdminSingin;
