import React, { useState } from 'react';
import styled from 'styled-components';
import PwInitBtn from 'components/Button/PwInitBtn';
import DetailBtn from 'components/Button/DetailBtn';
import ModalPortal from 'ModalPortal';
import DeleteModal from 'Modal/DeleteModal';

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
    details?: string;
    delete?: string;
  };
}

const ClientTable = ({ client }: Iprops) => {
  const [deleteModal, setDeleteModal] = useState(false);

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
      <Details>
        {typeof client.id === 'number' ? (
          <DetailBtn id={client.id} uri="client" />
        ) : (
          client.details
        )}
      </Details>
      <Delete>
        {typeof client.id === 'number' ? (
          <DeleteModalBtn
            alt="deleteBtn"
            src="/images/trashIcon.png"
            onClick={() => setDeleteModal(true)}
          />
        ) : (
          client.delete
        )}
        {deleteModal && (
          <ModalPortal>
            <DeleteModal id={client.id} setModal={setDeleteModal} />
          </ModalPortal>
        )}
      </Delete>
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

const Id = styled.li`
  width: 176px;
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

const Desc = styled.li`
  width: 144px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PasswordInit = styled.li`
  width: 134px;
  margin-left: 34px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RegDate = styled.li`
  width: 112px;
  margin-left: 16px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Details = styled.li`
  width: 80px;
  margin-left: 16px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Delete = styled.li`
  width: 54px;
  margin-left: 16px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DeleteModalBtn = styled.img`
  width: 24px;
`;

export default ClientTable;
