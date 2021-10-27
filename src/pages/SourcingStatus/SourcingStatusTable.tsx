import React from 'react';
import styled from 'styled-components';
import DetailBtn from 'components/Button/DetailBtn';

interface Iprops {
  sourcingStatusTable: {
    Num: string | number;
    Title: string;
    Name: string;
    LastUp: string;
    Progress: string | number;
    Status: string;
    PostStatus: string | boolean;
    Detail?: string;
  };
}

const SourcingStatusTable = ({ sourcingStatusTable }: Iprops) => {
  return (
    <>
      <Num>{sourcingStatusTable.Num}</Num>
      <Title>{sourcingStatusTable.Title}</Title>
      <Name>
        {typeof sourcingStatusTable.Name === 'string'
          ? sourcingStatusTable.Name
          : '-'}
      </Name>
      <LastUp>{sourcingStatusTable.LastUp}</LastUp>
      <Progress>
        {typeof sourcingStatusTable.Progress === 'number'
          ? `${sourcingStatusTable.Progress}% / 100%`
          : sourcingStatusTable.Progress}
      </Progress>
      <Status>{sourcingStatusTable.Status}</Status>
      {typeof sourcingStatusTable.PostStatus === 'string' ? (
        <PostStatus>{sourcingStatusTable.PostStatus}</PostStatus>
      ) : (
        <PostStatus>
          {sourcingStatusTable.PostStatus ? (
            <Posted>Post</Posted>
          ) : (
            <Hidden>Hide</Hidden>
          )}
        </PostStatus>
      )}
      <Detail>
        {typeof sourcingStatusTable.Num === 'number' ? (
          <DetailBtn id={sourcingStatusTable.Num} uri="crowdStatus" />
        ) : (
          sourcingStatusTable.Detail
        )}
      </Detail>
    </>
  );
};

const Num = styled.li`
  width: 32px;
  margin-left: 8px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.li`
  width: 240px;
  margin-left: 14px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Name = styled.li`
  width: 144px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LastUp = styled.li`
  width: 144px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Progress = styled.li`
  width: 96px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Status = styled.li`
  width: 104px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostStatus = styled.li`
  width: 80px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Posted = styled.span`
  color: blue;
`;

const Hidden = styled.span`
  color: red;
`;

const Detail = styled.li`
  width: 54px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default SourcingStatusTable;
