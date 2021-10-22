import React from 'react';
import styled from 'styled-components';
import PwInitBtn from 'components/Button/PwInitBtn';
import DetailBtn from 'components/Button/DetailBtn';
import DeleteBtn from 'components/Button/DeleteBtn';

interface Iprops {
  client: {
    id: string | number;
    loginId: string;
    clientName: string;
    remarks?: string;
    pwInit?: string;
    dateOfCreated?: string;
    dateOfUpdated?: string;
    password?: string;
    role?: string;
    Edit?: string;
    Delete?: string;
  };
  setClientId: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const ClientTable = ({ client, setClientId, setPage }: Iprops) => {
  return (
    <>
      <Num>{client.id}</Num>
      <Id>{client.loginId}</Id>
      <Name>{client.clientName}</Name>
      <Desc>{typeof client.remarks === 'string' ? client.remarks : '-'}</Desc>
      <PasswordInit>
        {typeof client.id === 'number' ? (
          <PwInitBtn id={client.id} />
        ) : (
          client.pwInit
        )}
      </PasswordInit>
      <RegDate>
        {typeof client.dateOfCreated === 'string'
          ? client.dateOfCreated.substr(0, 10)
          : '-'}
      </RegDate>
      <Edit>
        {typeof client.id === 'number' ? (
          <DetailBtn
            id={client.id}
            page="clientDetail"
            setId={setClientId}
            setPage={setPage}
          />
        ) : (
          client.Edit
        )}
      </Edit>
      <Delete>
        {typeof client.id === 'number' ? (
          <DeleteBtn id={client.id} />
        ) : (
          client.Delete
        )}
      </Delete>
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
  width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Name = styled.li`
  width: 10%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Desc = styled.li`
  width: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PasswordInit = styled.li`
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

const Edit = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Delete = styled.li`
  width: 10%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default ClientTable;
