import React from 'react';
import styled from 'styled-components';
import { UnlockOutline } from '@styled-icons/evaicons-outline/UnlockOutline';
import { Pencil } from '@styled-icons/bootstrap/Pencil';
import { Trash2 } from '@styled-icons/feather/Trash2';

const ClientTableInfo = () => {
  return (
    <ClientInfo>
      <ClientNum>1</ClientNum>
      <ClientId>Client Id</ClientId>
      <ClientName>Client Name</ClientName>
      <ClientDesc>Client Description</ClientDesc>
      <ClientPasswordInit>
        <PwInitBtn>
          <LockIcon />
        </PwInitBtn>
      </ClientPasswordInit>
      <ClientRegDate>Client Regist Date</ClientRegDate>
      <ClientEdit>
        <EditBtn>
          <PencilIcon />
        </EditBtn>
      </ClientEdit>
      <ClientDelete>
        <DeleteBtn>
          <TrashIcon />
        </DeleteBtn>
      </ClientDelete>
    </ClientInfo>
  );
};

const PwInitBtn = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.color.red};
  border: none;
  border-radius: 3px;
`;

const EditBtn = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.color.green};
  border: none;
  border-radius: 3px;
`;

const DeleteBtn = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.color.black};
  border: none;
  border-radius: 3px;
`;

const ClientInfo = styled.ul`
  display: flex;
  align-items: center;
  padding: 10px;
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

const LockIcon = styled(UnlockOutline)`
  width: 20px;
`;

const PencilIcon = styled(Pencil)`
  width: 15px;
`;

const TrashIcon = styled(Trash2)`
  width: 20px;
`;

export default ClientTableInfo;
