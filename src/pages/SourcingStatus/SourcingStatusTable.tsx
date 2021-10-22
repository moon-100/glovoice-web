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
  setSourcingStatusId: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const SourcingStatusTable = ({
  sourcingStatusTable,
  setSourcingStatusId,
  setPage,
}: Iprops) => {
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
            <Posted>Posted</Posted>
          ) : (
            <Hidden>Hidden</Hidden>
          )}
        </PostStatus>
      )}
      <Detail>
        {typeof sourcingStatusTable.Num === 'number' ? (
          <DetailBtn
            id={sourcingStatusTable.Num}
            page="sourcingStatusDetail"
            setId={setSourcingStatusId}
            setPage={setPage}
          />
        ) : (
          sourcingStatusTable.Detail
        )}
      </Detail>
    </>
  );
};

const Num = styled.li`
  width: 5%;
  margin-right: 15px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.li`
  width: 15%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Name = styled.li`
  width: 15%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LastUp = styled.li`
  width: 25%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Progress = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Status = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostStatus = styled.li`
  width: 10%;
  text-align: center;
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
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default SourcingStatusTable;
