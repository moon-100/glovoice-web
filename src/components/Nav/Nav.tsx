import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

interface pageType {
  readonly page?: string;
  readonly value?: string;
}

interface testType {
  pageName: string;
}

const Nav = ({ pageName }: testType) => {
  const history = useHistory();
  const [page, setPage] = useState(pageName);

  useEffect(() => {
    setPage(pageName);
  }, []);

  return (
    <Container>
      <ContentContainer>
        <Logo alt="logo" src="/images/logo-glo-voice.png" />
        <NavContainer>
          <NavHeader>Client Management</NavHeader>
          <NavContent
            value="clientList"
            page={page}
            onClick={() => {
              history.push('/clientList');
            }}
          >
            Client List
          </NavContent>
        </NavContainer>
        <NavContainer>
          <NavHeader>User Management</NavHeader>
          <NavContent
            value="userList"
            page={page}
            onClick={() => {
              history.push('/userList');
            }}
          >
            User List
          </NavContent>
        </NavContainer>
        <NavContainer>
          <NavHeader>CrowdSourcing Management</NavHeader>
          <NavContent
            value="crowdFileList"
            page={page}
            onClick={() => {
              history.push('/crowdFileList');
            }}
          >
            Crowdsourced file Management
          </NavContent>
          <NavContent
            value="crowdStatusList"
            page={page}
            onClick={() => {
              history.push('/crowdStatusList');
            }}
          >
            Crowdsourcing Status
          </NavContent>
        </NavContainer>
      </ContentContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 292px;
  height: 100%;
  background-color: #e9eef8;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 24px 16px 18px 16px;
`;

const Logo = styled.img`
  width: 210px;
  height: 34px;
`;

const NavContainer = styled.div`
  width: 260px;
  margin-top: 24px;
`;

const NavHeader = styled.div`
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
`;

const NavContent = styled.div<pageType>`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 6px 8px;
  border-radius: 4px;
  font-family: SpoqaHanSans;
  font-size: 14px;

  :hover {
    background-color: #d1dffd;
  }

  ${({ page, value }) => page === value && `background-color: #d1dffd;`}
`;

export default Nav;
