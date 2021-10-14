import React from 'react';
import styled from 'styled-components';

interface Iprops {
  userTable: {
    Num: string;
    Id: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Gender: string;
    Birthday: string;
    Language: string;
    RegDate: string;
    Detail: string;
    Status: string;
  };
}

const UserTable = ({ userTable }: Iprops) => {
  return (
    <>
      <Num>{userTable.Num}</Num>
      <Id>{userTable.Id}</Id>
      <FirstName>{userTable.FirstName}</FirstName>
      <MiddleName>{userTable.MiddleName}</MiddleName>
      <LastName>{userTable.LastName}</LastName>
      <Gender>{userTable.Gender}</Gender>
      <Birthday>{userTable.Birthday}</Birthday>
      <Language>{userTable.Language}</Language>
      <RegDate>{userTable.RegDate}</RegDate>
      <Detail>{userTable.Detail}</Detail>
      <Status>{userTable.Status}</Status>
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

const Id = styled.li`
  width: 8%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FirstName = styled.li`
  width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MiddleName = styled.li`
  width: 12%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LastName = styled.li`
  width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Gender = styled.li`
  width: 5%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Birthday = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Language = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RegDate = styled.li`
  width: 15%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Detail = styled.li`
  width: 5%;
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

export default UserTable;
