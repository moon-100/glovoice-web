import React from 'react';
import styled from 'styled-components';

interface Iprops {
  userDetailList: {
    id?: string | number;
    activity?: string;
    activityDetail?: string;
    itemInfo?: string;
    latestUpdate?: string;
  };
}

const UserDetailTable = ({ userDetailList }: Iprops) => {
  return (
    <>
      <Activity>{userDetailList.activity}</Activity>
      <Detail>{userDetailList.activityDetail}</Detail>
      <ItemInfo>{userDetailList.itemInfo}</ItemInfo>
      <LatestUpdate>{userDetailList.latestUpdate}</LatestUpdate>
    </>
  );
};

const Activity = styled.li`
  width: 64px;
  margin-left: 8px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.15px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Detail = styled.li`
  width: 104px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ItemInfo = styled.li`
  width: 644px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LatestUpdate = styled.li`
  width: 144px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default UserDetailTable;
