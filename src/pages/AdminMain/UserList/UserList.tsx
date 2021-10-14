import React from 'react';
import styled from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';
import UserFilter from './UserFilter';
import UserTable from './UserTable';

// 공용 컴포넌트 사용을 위한 상수데이터
const userTableHeader = {
  Num: `NUM`,
  Id: `Id`,
  FirstName: `First Name`,
  MiddleName: `Middle Name`,
  LastName: `Last Name`,
  Gender: `Gender`,
  Birthday: `Birthday`,
  Language: `Language`,
  RegDate: `Registered Date`,
  Detail: `Detail`,
  Status: `Status`,
};

// 서버에서 받아와야 될 데이터
const userTableContent = {
  Num: `1`,
  Id: `cho`,
  FirstName: `cho`,
  MiddleName: `seong`,
  LastName: `hwan`,
  Gender: `Male`,
  Birthday: `oct 02 1991`,
  Language: `Kor`,
  RegDate: `jun 01 2021`,
  Detail: `ddd`,
  Status: `sddsfsd`,
};

const UserList = () => {
  return (
    <Container>
      <NoticeBox>
        <NoticeTextBox>
          <NoticeText>- You can check registered user list.</NoticeText>
          <NoticeText>
            - You can block a user or check sourced file history.
          </NoticeText>
        </NoticeTextBox>
        <NewClientBtn>Register Client</NewClientBtn>
      </NoticeBox>
      <SearchBox>
        <SearchTextBox>
          <SearchHeader>Search</SearchHeader>
          <SearchText>
            *Search criteria depends on admin’s system time zone.
          </SearchText>
        </SearchTextBox>
        <SearchInputBox>
          <SearchInput type="text" placeholder="Enter user ID or name." />
          <SearchIcon />
        </SearchInputBox>
      </SearchBox>
      <UserFilter />
      <UserTableContainer>
        <UserTableHeader>
          <UserTable userTable={userTableHeader} />
        </UserTableHeader>
        <UserTableContents>
          <UserTable userTable={userTableContent} />
        </UserTableContents>
      </UserTableContainer>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 200px;
  padding: 20px 10px 0px 20px;
  min-height: 100vh;
`;

const NoticeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 10px;
  border: 2px solid rgb(220, 220, 220);
  border-radius: 10px;
`;

const NoticeTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

const NoticeText = styled.div``;

const NewClientBtn = styled.button`
  height: 40px;
  color: white;
  background-color: ${({ theme }) => theme.color.yellow};
  border: none;
  border-radius: 5px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
`;

const SearchTextBox = styled.div`
  display: flex;
  align-items: center;
`;

const SearchHeader = styled.div`
  height: 40px;
  line-height: 40px;
  padding-right: 10px;
  border-right: 1px solid black;
  font-size: 20px;
`;

const SearchText = styled.div`
  color: red;
  margin-left: 10px;
`;

const SearchInputBox = styled.div``;

const SearchInput = styled.input`
  width: 250px;
  height: 35px;
  padding-left: 10px;
  border: 1px solid rgb(220, 220, 220);
`;

const UserTableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserTableHeader = styled.ul`
  display: flex;
  padding: 20px 10px 10px 10px;
  border-bottom: 2px solid rgb(220, 220, 220);
  font-size: 15px;
  font-weight: bold;
`;

const UserTableContents = styled.ul`
  display: flex;
  padding: 20px 10px 10px 10px;
  font-size: 15px;
`;

const SearchIcon = styled(SearchAlt2)`
  width: 30px;
  margin-left: 15px;
  color: skyblue;
`;

export default UserList;
