import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { SIGN_IN } from 'config';

interface loginErrorType {
  readonly loginError?: boolean;
}

const AdminSignin = () => {
  const history = useHistory();
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const signin = () => {
    fetch(`${SIGN_IN}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ loginId, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          localStorage.setItem('admin-token', res.token);
          history.push('/main');
        } else {
          alert(`Please check your account.`);
          setLoginError(true);
        }
      });
  };

  return (
    <Container>
      <ContentFrame>
        <Logo alt="Logo" src="/images/logo-glo-voice.png" />
        <InputContainer>
          <InputText>ID</InputText>
          <InputBox
            type="text"
            placeholder="Your ID"
            onChange={(e) => {
              setLoginId(e.target.value);
            }}
            loginError={loginError}
            defaultValue={loginId}
          />
          <InputText>Password</InputText>
          <InputBox
            type="password"
            placeholder="Your Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            loginError={loginError}
            defaultValue={password}
          />
          {loginError && <ErrorBox>Please check your account.</ErrorBox>}
        </InputContainer>
        <SigninBtn onClick={signin}>LOG IN</SigninBtn>
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
  width: 420px;
  height: 338px;
`;

const Logo = styled.img`
  width: 236px;
  height: 38px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
`;

const InputText = styled.div`
  height: 20px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: bold;
  font-family: SpoqaHanSans;
`;

const InputBox = styled.input<loginErrorType>`
  width: 328px;
  height: 48px;
  margin-bottom: 16px;
  padding: 13px 8px 15px 8px;
  border: none;
  border-radius: 8px;
  background-color: #f5f5f5;
  font-size: 14px;
  font-family: SpoqaHanSans;

  /* ${({ loginError }) =>
    loginError ? `background-color:blue;` : `background-color:red;`} */

  ${({ loginError }) =>
    loginError && `border:1px solid #e44646; background-color:#fff2f2;`}

  ::placeholder {
    color: #111;
  }
`;

const ErrorBox = styled.div`
  width: 100%;
  margin-top: -8px;
  font-size: 14px;
  text-align: center;
  color: #e44646;
`;

const SigninBtn = styled.button`
  width: 328px;
  height: 48px;
  border-radius: 24px;
  color: rgba(255, 255, 255, 0.47);
  border: none;
  background-color: #111;
  font-family: SpoqaHanSans;
`;

export default AdminSignin;
