import React from 'react';
import styled from 'styled-components';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

const NavSide = () => {
  return (
    <>
      <SideNav>
        <SideNavHeader>
          클라이언트 관리
          <ArrowDownIcon />
        </SideNavHeader>
        <SideNavContentBox>
          <SideNavContent>클라이언트 현황</SideNavContent>
        </SideNavContentBox>
      </SideNav>
      <SideNav>
        <SideNavHeader>
          사용자 관리
          <ArrowDownIcon />
        </SideNavHeader>
        <SideNavContentBox>
          <SideNavContent>사용자 현황</SideNavContent>
        </SideNavContentBox>
      </SideNav>
      <SideNav>
        <SideNavHeader>
          소싱 관리
          <ArrowDownIcon />
        </SideNavHeader>
        <SideNavContentBox>
          <SideNavContent>소싱 파일 관리</SideNavContent>
        </SideNavContentBox>
        <SideNavContentBox>
          <SideNavContent>소싱 현황 관리</SideNavContent>
        </SideNavContentBox>
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
  height: 60px;
  line-height: 60px;
  margin: 0px 10px;
`;
const SideNavContentBox = styled.div`
  margin-left: 50px;
  border-top: 2px solid rgb(211, 211, 211);
`;
const SideNavContent = styled.div`
  height: 60px;
  line-height: 60px;
  margin-left: -10px;
`;
const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  width: 23px;
`;
export default NavSide;
