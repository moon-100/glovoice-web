import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DELETE_CLIENT, DUPLICATE_CHECK, PASSWORD_INIT, SIGN_UP } from 'config';
import { useHistory, useParams } from 'react-router';
import Nav from 'components/Nav/Nav';

interface paramsType {
  id: string;
}

const ClientDetail = () => {
  const [loginId, setLoginId] = useState('');
  const [duplicate, setDuplicate] = useState('unchecked');
  const [clientName, setClientName] = useState('');
  const [required, setRequired] = useState(false);
  const [remarks, setRemarks] = useState('');
  const [remarkLength, setRemarkLength] = useState(0);
  const [clientDetail, setClientDetail] = useState({
    id: 0,
    loginId: '',
    clientName: '',
    remarks: '',
    dateOfCreated: '',
    dateOfUpdated: '',
    password: '',
    role: '',
  });

  const history = useHistory();
  const { id }: paramsType = useParams();

  useEffect(() => {
    fetch(`/data/clientList${id}.json`)
      .then((res) => res.json())
      .then((res) => {
        setClientDetail(res);
      });
  }, []);

  const duplicateCheck = () => {
    fetch(`${DUPLICATE_CHECK}`, {
      method: 'POST',
      body: JSON.stringify({ loginId }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res === 'success') {
          setDuplicate('checked');
        }
        if (res === 'error') {
          setDuplicate('checkError');
        }
      });
  };

  const passwordInit = () => {
    fetch(`${PASSWORD_INIT}`, {
      method: 'POST',
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const deleteClient = () => {
    fetch(`${DELETE_CLIENT}/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const newClient = () => {
    fetch(`${SIGN_UP}`, {
      method: 'POST',
      body: JSON.stringify({
        loginId,
        clientName,
        remarks,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error === 'Conflict') {
          setRequired(true);
        }
      });
  };

  return (
    <>
      <Nav pageName="clientList" />
      <Container>
        <ClientDetailContainer>
          <InfoContainer>
            <IdContainer>
              <IdHeader>ID</IdHeader>
              {id === '0' ? (
                <IdInput
                  placeholder="Please enter a combination of at least 6 digits of English and numbers."
                  onChange={(e) => setLoginId(e.target.value)}
                />
              ) : (
                <IdInput value={clientDetail.loginId} disabled />
              )}
              {id === '0' && (
                <>
                  {duplicate !== 'checked' && (
                    <IdDuplCheckBtn onClick={() => duplicateCheck()}>
                      DUPLICATE CHECK
                    </IdDuplCheckBtn>
                  )}
                  {duplicate === 'checkError' && (
                    <IdDuplCheckAlert>There’s an existing ID.</IdDuplCheckAlert>
                  )}
                </>
              )}
            </IdContainer>
            <NameContainer>
              <NameHeader>Name</NameHeader>
              {id === '0' ? (
                <NameInput
                  placeholder="Please enter client’s name."
                  type="text"
                  onChange={(e) => setClientName(e.target.value)}
                />
              ) : (
                <NameInput
                  placeholder="Please enter client’s name."
                  type="text"
                  onChange={(e) => setClientName(e.target.value)}
                  defaultValue={clientDetail.clientName}
                />
              )}
              {required && (
                <NameDuplCheckAlert>This field is required.</NameDuplCheckAlert>
              )}
            </NameContainer>
            <RemarkContainer>
              <RemarkHeader>Remarks</RemarkHeader>
              <RemarkInputBox>
                {id === '0' ? (
                  <RemarkInput
                    placeholder="Please enter remarks."
                    onChange={(e) => {
                      setRemarkLength(e.target.value.length);
                      setRemarks(e.target.value);
                    }}
                    maxLength={1000}
                  />
                ) : (
                  <RemarkInput
                    placeholder="Please enter remarks."
                    defaultValue={clientDetail.remarks}
                    onChange={(e) => {
                      setRemarkLength(e.target.value.length);
                      setRemarks(e.target.value);
                    }}
                    maxLength={1000}
                  />
                )}
                <RemarkInputLength>({remarkLength}/1000)</RemarkInputLength>
              </RemarkInputBox>
            </RemarkContainer>
            <RegDateContainer>
              <RegDateHeader>Registered date</RegDateHeader>
              <RegDateText>
                {id === '0'
                  ? '-'
                  : `${clientDetail.dateOfCreated.substr(0, 10)}`}
              </RegDateText>
            </RegDateContainer>
            <PwContainer>
              <PwHeader>Password</PwHeader>
              <PwContent>
                <PwText>Initial password is *1234!</PwText>
                <PasswordInitBtn onClick={() => passwordInit()}>
                  INITIALIZE PASSWORD
                </PasswordInitBtn>
              </PwContent>
            </PwContainer>
          </InfoContainer>
          <BtnContainer id={id}>
            <GotoListBtn
              onClick={() => {
                history.push('/clientList');
              }}
            >
              LIST
            </GotoListBtn>
            <DelSaveBtn>
              {id !== '0' && (
                <DelBtn
                  onClick={() => {
                    deleteClient();
                  }}
                >
                  DELETE ACCOUNT
                </DelBtn>
              )}
              <SaveBtn onClick={() => newClient()}>SAVE</SaveBtn>
            </DelSaveBtn>
          </BtnContainer>
        </ClientDetailContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 292px;
`;

const ClientDetailContainer = styled.div`
  max-width: 1020px;
  width: 100%;
  margin-top: 64px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid #2d2d2d;
`;

const IdContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const IdHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const IdInput = styled.input`
  width: 540px;
  height: 40px;
  margin-left: 10px;
  padding-left: 8px;
  border-radius: 8px;
  background-color: #eee;
  border: none;

  ::placeholder {
    font-family: SpoqaHanSans;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: #aaa;
  }

  :focus {
    outline: solid 1px #1a61f7;
    background-color: #e3eaf9;
  }
`;

const IdDuplCheckBtn = styled.button`
  width: 128px;
  height: 40px;
  margin-left: 9px;
  border-radius: 8px;
  border: solid 1px #1a61f7;
  background-color: white;
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #1a61f7;
`;

const IdDuplCheckAlert = styled.div`
  height: 16px;
  margin-left: 8px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.4px;
  color: #e44646;
`;

const NameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const NameHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const NameInput = styled.input`
  width: 540px;
  height: 40px;
  margin-left: 10px;
  padding-left: 8px;
  border-radius: 8px;
  background-color: #eee;
  border: none;

  ::placeholder {
    font-family: SpoqaHanSans;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: #aaa;
  }

  :focus {
    outline: solid 1px #1a61f7;
    background-color: #e3eaf9;
  }
`;

const NameDuplCheckAlert = styled.div`
  height: 16px;
  margin-left: 8px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.4px;
  color: #e44646;
`;

const RemarkContainer = styled.div`
  display: flex;
  align-items: center;
  height: 344px;
  border-bottom: 1px solid #2d2d2d;
`;

const RemarkHeader = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-top: 16px;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const RemarkInputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const RemarkInput = styled.textarea`
  width: 814px;
  height: 304px;
  margin-left: 10px;
  padding-top: 8px;
  padding-left: 8px;
  border-radius: 8px;
  background-color: #eee;
  border: none;
  resize: none;

  ::placeholder {
    font-family: SpoqaHanSans;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: #aaa;
  }

  :focus {
    outline: solid 1px #1a61f7;
    background-color: #e3eaf9;
  }
`;

const RemarkInputLength = styled.div`
  margin-top: 4px;
  margin-left: 10px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
`;

const RegDateContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const RegDateHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const RegDateText = styled.div`
  margin-left: 10px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
`;

const PwContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const PwHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const PwContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const PwText = styled.div`
  margin-left: 10px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
`;

const PasswordInitBtn = styled.button`
  width: 160px;
  height: 40px;
  margin-right: 8px;
  padding: 8px;
  border-radius: 8px;
  border: solid 1px #1a61f7;
  background-color: white;
  font-family: SpoqaHanSans;
  font-size: 12px;
  font-weight: bold;
  color: #1a61f7;
`;

const BtnContainer = styled.div<paramsType>`
  display: flex;
  justify-content: ${({ id }) => (id === '0' ? 'flex-end' : 'space-between')};
  align-items: center;
  margin-top: 44px;
`;

const GotoListBtn = styled.button`
  width: 160px;
  height: 48px;
  margin-right: 16px;
  padding: 12px 16px;
  border-radius: 24px;
  border: solid 1px #1a61f7;
  background-color: white;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1.25px;
  color: #1a61f7;
`;

const DelSaveBtn = styled.div`
  display: flex;
`;

const DelBtn = styled.button`
  width: 200px;
  height: 48px;
  margin-right: 16px;
  padding: 12px 16px;
  border-radius: 24px;
  border: solid 1px #1a61f7;
  background-color: white;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1.25px;
  color: #1a61f7;
`;

const SaveBtn = styled.button`
  width: 200px;
  height: 48px;
  padding: 12px 16px;
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

export default ClientDetail;
