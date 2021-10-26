import React from 'react';
import styled from 'styled-components';
import DetailBtn from 'components/Button/DetailBtn';

interface Iprops {
  sourcingManageTable: {
    Num: string | number;
    Title: string;
    Name?: string;
    Size: string | number;
    Remarks?: string;
    UpDate: string;
    UpStatus: string;
    PostStatus?: string;
    Detail?: string;
  };
}

const SourcingManageTable = ({ sourcingManageTable }: Iprops) => {
  return (
    <>
      <Num>{sourcingManageTable.Num}</Num>
      <Title>{sourcingManageTable.Title}</Title>
      <Name>
        {typeof sourcingManageTable.Name === 'string'
          ? sourcingManageTable.Name
          : '-'}
      </Name>
      <Size>{sourcingManageTable.Size}</Size>
      <Remarks>{sourcingManageTable.Remarks}</Remarks>
      <UpDate>
        {typeof sourcingManageTable.UpDate === 'string'
          ? sourcingManageTable.UpDate
          : '-'}
      </UpDate>
      <UpStatus>{sourcingManageTable.UpStatus}</UpStatus>
      <PostStatus>{sourcingManageTable.PostStatus}</PostStatus>
      <Detail>
        {typeof sourcingManageTable.Num === 'number' ? (
          <DetailBtn id={sourcingManageTable.Num} uri="crowdFile" />
        ) : (
          sourcingManageTable.Detail
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
  width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Name = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Size = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Remarks = styled.li`
  width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UpDate = styled.li`
  width: 25%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UpStatus = styled.li`
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

const Detail = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default SourcingManageTable;
