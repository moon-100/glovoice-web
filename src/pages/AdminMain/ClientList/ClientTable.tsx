import React from 'react';
import styled from 'styled-components';
import ClientTableInfo from './ClientTableInfo';

const ClientTable = () => {
  return (
    <ClientBox>
      <ClientInfoHeader>
        <ClientNum>SEQ</ClientNum>
        <ClientId>Client Id</ClientId>
        <ClientName>Client Name</ClientName>
        <ClientDesc>Client Description</ClientDesc>
        <ClientPasswordInit>Password Init</ClientPasswordInit>
        <ClientRegDate>Client Regist Date</ClientRegDate>
        <ClientEdit>Client Edit</ClientEdit>
        <ClientDelete>Client Delete</ClientDelete>
      </ClientInfoHeader>
      <ClientTableInfo />
    </ClientBox>
  );
};

const ClientBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientInfoHeader = styled.ul`
  display: flex;
  padding: 20px 10px 10px 10px;
  border-bottom: 2px solid rgb(220, 220, 220);
  font-size: 15px;
  font-weight: bold;
`;

const ClientNum = styled.li`
  width: 5%;
  margin-right: 15px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ClientId = styled.li`
  width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ClientName = styled.li`
  width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ClientDesc = styled.li`
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ClientPasswordInit = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ClientRegDate = styled.li`
  width: 15%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ClientEdit = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ClientDelete = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default ClientTable;
