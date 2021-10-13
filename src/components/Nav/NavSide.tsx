import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';

const NavSide = () => {
  const [activeClient, setActiveClient] = useState(false);
  const [activeUser, setActiveUser] = useState(false);
  const [activeSourcing, setActiveSourcing] = useState(false);

  return (
    <>
      <SideNav>
        <SideNavHeader>
          Client Management
          {activeClient ? (
            <ArrowUpIcon
              active={activeClient}
              onClick={() => {
                setActiveClient(!activeClient);
              }}
            />
          ) : (
            <ArrowDownIcon
              onClick={() => {
                setActiveClient(!activeClient);
              }}
            />
          )}
        </SideNavHeader>
        {activeClient && (
          <SideNavContentBox>
            <SideNavContent>Client List</SideNavContent>
          </SideNavContentBox>
        )}
      </SideNav>
      <SideNav>
        <SideNavHeader>
          User Management
          {activeUser ? (
            <ArrowUpIcon
              active={activeUser}
              onClick={() => {
                setActiveUser(!activeUser);
              }}
            />
          ) : (
            <ArrowDownIcon
              onClick={() => {
                setActiveUser(!activeUser);
              }}
            />
          )}
        </SideNavHeader>
        {activeUser && (
          <SideNavContentBox>
            <SideNavContent>User List</SideNavContent>
          </SideNavContentBox>
        )}
      </SideNav>
      <SideNav>
        <SideNavHeader>
          Crowdsourcing Management
          {activeSourcing ? (
            <ArrowUpIcon
              active={activeSourcing}
              onClick={() => {
                setActiveSourcing(!activeSourcing);
              }}
            />
          ) : (
            <ArrowDownIcon
              onClick={() => {
                setActiveSourcing(!activeSourcing);
              }}
            />
          )}
        </SideNavHeader>
        {activeSourcing && (
          <>
            <SideNavContentBox>
              <SideNavContent>Crowdsourced File Management</SideNavContent>
            </SideNavContentBox>
            <SideNavContentBox>
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
