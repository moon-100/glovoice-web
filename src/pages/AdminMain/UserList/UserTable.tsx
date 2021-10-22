import React, { useState } from 'react';
import styled from 'styled-components';
import DetailBtn from 'components/Button/DetailBtn';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';

interface Iprops {
  userTable: {
    Num: string | number;
    Id: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    Gender: string;
    Birthday: string;
    Language: string;
    RegDate?: string;
    Detail?: string;
    Status?: string | boolean;
  };
  setUserId: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const UserTable = ({ userTable, setUserId, setPage }: Iprops) => {
  const [activeWindow, setActiveWindow] = useState(false);

  const clickWindowHandler = () => {
    setActiveWindow(!activeWindow);
  };

  const conditionHandler = (value: boolean) => {
    if (value) {
      console.log('활성화');
    } else {
      console.log('비활성화');
    }
  };

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
      <Detail>
        {typeof userTable.Num === 'number' ? (
          <DetailBtn
            id={userTable.Num}
            page="userDetail"
            setId={setUserId}
            setPage={setPage}
          />
        ) : (
          userTable.Detail
        )}
      </Detail>
      {typeof userTable.Status === 'boolean' ? (
        <Status>
          <FilterBox>
            <FilterTextBox onClick={clickWindowHandler}>
              {userTable.Status ? (
                <ActiveText>Activated</ActiveText>
              ) : (
                <DeactiveText>Deactivated</DeactiveText>
              )}
              {activeWindow ? <ArrowUpIcon /> : <ArrowDownIcon />}
            </FilterTextBox>
            {activeWindow && (
              <FilterNavBox>
                <FilterNav
                  onClick={() => conditionHandler(true)}
                  style={{ color: 'blue', fontWeight: 'bold' }}
                >
                  Activated
                </FilterNav>
                <FilterNav
                  onClick={() => conditionHandler(false)}
                  style={{ color: 'red', fontWeight: 'bold' }}
                >
                  Deactivated
                </FilterNav>
              </FilterNavBox>
            )}
          </FilterBox>
        </Status>
      ) : (
        <Status>{userTable.Status}</Status>
      )}
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
  width: 12%;
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
  display: flex;
  justify-content: center;
  width: 13%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FilterBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-top: -15px;
`;

const FilterTextBox = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  border: 1px solid rgb(220, 220, 220);
`;

const ActiveText = styled.div`
  padding: 5px;
  color: blue;
  font-size: 13px;
  font-weight: bold;
`;

const DeactiveText = styled.div`
  padding: 5px;
  color: red;
  font-size: 13px;
  font-weight: bold;
`;

const FilterNavBox = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`;

const FilterNav = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: -1px;
  padding: 5px;
  border: 1px solid rgb(220, 220, 220);
  font-size: 13px;
`;

const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  width: 15px;
  margin: 0 10px;
`;

const ArrowUpIcon = styled(ArrowIosUpwardOutline)`
  width: 15px;
  margin: 0 10px;
`;

export default UserTable;
