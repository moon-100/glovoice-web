import { DELETE_CLIENT } from 'config';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

type Iprops = {
  id: string | number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeleteModal = ({ setModal, id }: Iprops) => {
  const history = useHistory();
  const clickHandler = () => {
    fetch(`${DELETE_CLIENT}/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((res) => {
        if (res.Message === 'SUCCESS') {
          alert('Delete complete.');
          history.go(0);
        } else {
          alert('Delete failed');
        }
      });
  };

  return (
    <Container>
      <Content>
        <ContetTextContainer>
          <ContentText>
            You will lose related data if you delete this account.
            <br /> Are you sure to delete this account?
          </ContentText>
        </ContetTextContainer>
        <ContentBtnContainer>
          <CancleBtn onClick={() => setModal(false)}>CANCLE</CancleBtn>
          <ConfirmBtn onClick={clickHandler}>CONFIRM</ConfirmBtn>
        </ContentBtnContainer>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background: rgba(0, 0, 0, 0.25);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 8px;
  width: 612px;
  height: 230px;
`;

const ContetTextContainer = styled.div`
  margin-top: 64px;
  width: 564px;
  height: 72px;
`;

const ContentText = styled.div`
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.5px;
  text-align: center;
`;

const ContentBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 22px;
  width: 564px;
`;

const CancleBtn = styled.button`
  width: 274px;
  height: 48px;
  border-radius: 24px;
  border: solid 1px #1a61f7;
  background-color: white;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1.25px;
  color: #1a61f7;
`;

const ConfirmBtn = styled.button`
  width: 274px;
  height: 48px;
  border-radius: 24px;
  border: none;
  background-color: #1a61f7;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1.25px;
  color: #fff;
`;

export default DeleteModal;
