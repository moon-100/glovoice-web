import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';

interface Iprops {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const NavSide = ({ setPage }: Iprops) => {
  const [activeClient, setActiveClient] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeSourcing, setActiveSourcing] = useState(false);
  return (
    <>
      <SideNav>
        <SideNavHeader
          onClick={() => {
            setActiveClient(!activeClient);
          }}
        >
          Client Management
          {activeClient ? (
            <ArrowUpIcon active={activeClient} />
          ) : (
            <ArrowDownIcon />
          )}
        </SideNavHeader>
        {activeClient && (
          <SideNavContentBox onClick={() => setPage('clientList')}>
            <SideNavContent>Client List</SideNavContent>
          </SideNavContentBox>
        )}
      </SideNav>
      <SideNav>
        <SideNavHeader
          onClick={() => {
            setActiveUser(!activeUser);
          }}
        >
          User Management
          {activeUser ? <ArrowUpIcon active={activeUser} /> : <ArrowDownIcon />}
        </SideNavHeader>
        {activeUser && (
          <SideNavContentBox onClick={() => setPage('userList')}>
            <SideNavContent>User List</SideNavContent>
          </SideNavContentBox>
        )}
      </SideNav>
      <SideNav>
        <SideNavHeader
          onClick={() => {
            setActiveSourcing(!activeSourcing);
          }}
        >
          Crowdsourcing Management
          {activeSourcing ? (
            <ArrowUpIcon active={activeSourcing} />
          ) : (
            <ArrowDownIcon />
          )}
        </SideNavHeader>
        {activeSourcing && (
          <>
            <SideNavContentBox onClick={() => setPage('sourcingManageList')}>
              <SideNavContent>Crowdsourced File Management</SideNavContent>
            </SideNavContentBox>
            <SideNavContentBox onClick={() => setPage('sourcingStatusList')}>
              <SideNavContent>Crowdsourcing Status</SideNavContent>
            </SideNavContentBox>
          </>
        )}
      </SideNav>
    </>
  );
};
const SideNav = styled.div`
  width: 100%;
  border-bottom: 2px solid rgb(211, 211, 211);
  background-color: white;
  z-index: 10001;
`;
const SideNavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin: 0px 10px;
`;
const SideNavContentBox = styled.div`
  margin-left: 50px;
  border-top: 2px solid rgb(211, 211, 211);
`;
const SideNavContent = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  margin-left: -10px;
  :hover {
    color: ${({ theme }) => theme.color.yellow};
  }
`;

const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  width: 23px;

  :hover {
    color: ${({ theme }) => theme.color.yellow};
  }
`;

const ArrowUpIcon = styled(ArrowIosUpwardOutline)<{ active: boolean }>`
  width: 23px;
  color: ${({ active, theme }) => active && theme.color.yellow};
`;

export default NavSide;
