import React, { useState } from 'react';
import styled from 'styled-components';
import DetailBtn from 'components/Button/DetailBtn';
import { BASE_URL } from 'config';

interface Iprops {
  user: {
    id: string | number;
    loginId: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    gender: string;
    dateOfCreated?: string;
    dateOfUpdated?: string;
    status: string | boolean;
    birthday?: string;
    password?: string;
    role?: string;
    languages: string;
    detail?: string;
  };
}

const UserTable = ({ user }: Iprops) => {
  const [activeWindow, setActiveWindow] = useState(false);

  const clickWindowHandler = () => {
    setActiveWindow(!activeWindow);
  };

  const conditionHandler = (value: boolean) => {
    if (value) {
      fetch(`${BASE_URL}/user/${user.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify({ status: true }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } else {
      fetch(`${BASE_URL}/user/${user.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify({ status: false }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };

  return (
    <>
      <Num>{user.id}</Num>
      <Id>{user.loginId}</Id>
      <FirstName>{user.firstName}</FirstName>
      <MiddleName>{user.middleName ? user.middleName : '-'}</MiddleName>
      <LastName>{user.lastName}</LastName>
      <Gender>{user.gender}</Gender>
      <Birthday>
        {typeof user.birthday === 'string' ? user.birthday.substr(0, 10) : '-'}
      </Birthday>
      <Language>{user.languages}</Language>
      <RegDate>
        {typeof user.dateOfCreated === 'string'
          ? user.dateOfCreated.substr(0, 10)
          : '-'}
      </RegDate>
      <Detail>
        {typeof user.id === 'number' ? (
          <DetailBtn id={user.id} uri="user" />
        ) : (
          user.detail
        )}
      </Detail>
      {typeof user.status === 'boolean' ? (
        <Status>
          <FilterBox activeWindow={activeWindow}>
            <FilterTextBox onClick={clickWindowHandler}>
              {user.status ? (
                <ActiveText activeWindow={activeWindow}>Activated</ActiveText>
              ) : (
                <DeactiveText activeWindow={activeWindow}>
                  Deactivated
                </DeactiveText>
              )}
              {activeWindow ? (
                <ArrowUpIcon alt="arrowUpIcon" src="/images/arrowUpIcon.png" />
              ) : (
                <ArrowDownIcon
                  alt="arrowDownIcon"
                  src="/images/arrowDownIcon.png"
                />
              )}
            </FilterTextBox>
            {activeWindow && (
              <FilterNavBox>
                <FilterDefault onClick={clickWindowHandler} />
                <FilterNav onClick={() => conditionHandler(true)}>
                  Activated
                </FilterNav>
                <FilterNav onClick={() => conditionHandler(false)}>
                  Deactivated
                </FilterNav>
              </FilterNavBox>
            )}
          </FilterBox>
        </Status>
      ) : (
        <Status>{user.status}</Status>
      )}
    </>
  );
};

const Num = styled.li`
  width: 26px;
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
  width: 120px;
  margin-left: 8px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FirstName = styled.li`
  width: 88px;
  margin-left: 8px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const MiddleName = styled.li`
  width: 88px;
  margin-left: 8px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LastName = styled.li`
  width: 88px;
  margin-left: 8px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Gender = styled.li`
  width: 88px;
  margin-left: 8px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Birthday = styled.li`
  width: 88px;
  margin-left: 8px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Language = styled.li`
  width: 72px;
  margin-left: 8px;
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
  margin-left: 8px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Detail = styled.li`
  width: 54px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Status = styled.li`
  width: 92px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FilterBox = styled.div<{ activeWindow: boolean }>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92px;
  height: 30px;
  margin-top: -15px;
  border-radius: 4px;

  ${({ activeWindow }) => !activeWindow && `border: solid 1px #aaa;`}
`;

const FilterTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 8px;
  align-items: center;
  background-color: #fff;
`;

const ActiveText = styled.div<{ activeWindow: boolean }>`
  font-family: SpoqaHanSans;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: 0.35px;
  color: #1a61f7;

  ${({ activeWindow }) => activeWindow && `color: #ccc;`}
`;

const DeactiveText = styled.div<{ activeWindow: boolean }>`
  width: 60px;
  height: 14px;
  font-family: SpoqaHanSans;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: 0.35px;
  color: #e44646;

  ${({ activeWindow }) => activeWindow && `color: #ccc;`}
`;

const ArrowUpIcon = styled.img`
  width: 12px;
`;

const ArrowDownIcon = styled.img`
  width: 12px;
`;

const FilterNavBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  border: solid 1px #666;
  overflow: hidden;
  z-index: 10001;
`;

const FilterDefault = styled.div`
  height: 30px;
`;

const FilterNav = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: -1px;
  padding: 8px;
  border-top: 1px solid rgb(220, 220, 220);
  font-family: SpoqaHanSans;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.21px;
  background-color: white;

  :hover {
    background-color: #3880f7;
    color: #fff;
  }
`;

export default UserTable;
