import Nav from 'components/Nav/Nav';
import React from 'react';
import styled from 'styled-components';
import { UnlockOutline } from '@styled-icons/evaicons-outline/UnlockOutline';

const ClientDetail = () => {
  return (
    <>
      <Nav />
      <Container>
        <Header>Client Information</Header>
        <InfoContainer>
          <IdContainer>
            <IdHeader>Email ID</IdHeader>
            <IdInput placeholder="Please enter a combination of at least 6 digits of English and numbers." />
            <IdDuplCheckBtn>Duplicate Check</IdDuplCheckBtn>
            <IdDuplCheckAlert>There’s an existing ID.</IdDuplCheckAlert>
          </IdContainer>
          <NameContainer>
            <NameHeader>Name</NameHeader>
            <NameInput placeholder="Please enter client’s name." />
            <NameDuplCheckAlert>This field is required.</NameDuplCheckAlert>
          </NameContainer>
          <RemarkContainer>
            <RemarkHeader>Remarks</RemarkHeader>
            <RemarkInputBox>
              <RemarkInput placeholder="Please enter remarks." />
              <RemarkInputLength>(0/1000)</RemarkInputLength>
            </RemarkInputBox>
          </RemarkContainer>
          <RegDateContainer>
            <RegDateHeader>Registered date</RegDateHeader>
            <RegDateText>-</RegDateText>
          </RegDateContainer>
          <PwContainer>
            <PwHeader>Password</PwHeader>
            <PwText>
              The password is encrypted. The initial password is *1234!
            </PwText>
            <PwInitBtn>
              Initialize password
              <LockIcon />
            </PwInitBtn>
          </PwContainer>
        </InfoContainer>
        <BtnContainer>
          <GotoListBtn>List</GotoListBtn>
          <DelSaveBtn>
            <DelBtn>Client Delete</DelBtn>
            <SaveBtn>Save</SaveBtn>
          </DelSaveBtn>
        </BtnContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-left: 200px;
  padding: 10px 20px 20px 20px;
`;

const Header = styled.h1`
  margin: 10px;
  font-size: 25px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 3px solid rgb(147, 147, 147);
  border-bottom: 1px solid rgb(147, 147, 147);
`;

const IdContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const IdHeader = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const IdInput = styled.input`
  width: 400px;
  height: 26px;
  margin-left: 25px;
  padding-left: 10px;
  font-size: 12px;
`;

const IdDuplCheckBtn = styled.button`
  width: 100px;
  height: 25px;
  margin-left: 20px;
  color: white;
  background-color: orange;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 16px;
`;

const IdDuplCheckAlert = styled.div`
  margin-left: 20px;
  color: red;
  font-size: 12px;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const NameHeader = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const NameInput = styled.input`
  width: 400px;
  height: 26px;
  margin-left: 25px;
  padding-left: 10px;
  font-size: 12px;
`;

const NameDuplCheckAlert = styled.div`
  margin-left: 140px;
  color: red;
  font-size: 12px;
`;

const RemarkContainer = styled.div`
  display: flex;
  align-items: center;
  height: 170px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const RemarkHeader = styled.div`
  display: flex;
  width: 150px;
  height: 100%;
  padding-top: 13px;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const RemarkInputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
`;

const RemarkInput = styled.textarea`
  width: 600px;
  height: 130px;
  padding-top: 7px;
  padding-left: 10px;
  font-size: 12px;
  resize: none;
`;

const RemarkInputLength = styled.div`
  padding-top: 7px;
  color: red;
  font-size: 15px;
`;

const RegDateContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const RegDateHeader = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const RegDateText = styled.div`
  margin-left: 25px;
  padding-top: 7px;
  font-size: 12px;
`;

const PwContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid rgb(220, 220, 220);
`;

const PwHeader = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  height: 100%;
  padding-left: 10px;
  background-color: rgb(243, 243, 243);
  font-size: 14px;
`;

const PwText = styled.div`
  margin-left: 25px;
  padding-top: 7px;
  font-size: 12px;
`;

const PwInitBtn = styled.button`
  width: 150px;
  height: 25px;
  margin-left: 20px;
  color: white;
  background-color: rgb(236, 94, 88);
  border: none;
  font-size: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 16px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const GotoListBtn = styled.button`
  width: 100px;
  height: 25px;
  color: orange;
  background-color: white;
  border: 1px solid orange;
  font-size: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 16px;
`;

const DelSaveBtn = styled.div`
  display: flex;
`;

const DelBtn = styled.button`
  width: 100px;
  height: 25px;
  margin-right: 20px;
  color: white;
  background-color: rgb(28, 2, 1);
  border: none;
  font-size: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 16px;
`;

const SaveBtn = styled.button`
  width: 100px;
  height: 25px;
  color: white;
  background-color: rgb(93, 180, 54);
  border: none;
  font-size: 14px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 16px;
`;

const LockIcon = styled(UnlockOutline)`
  width: 15px;
  margin-left: 3px;
`;

export default ClientDetail;
