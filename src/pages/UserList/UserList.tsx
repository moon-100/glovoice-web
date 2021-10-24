import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';
import FilterBtn from 'components/Filter/FilterBtn';
import Nav from 'components/Nav/Nav';
import UserTable from './UserTable';

// 공용 컴포넌트 사용을 위한 상수데이터
const userTableHeader = {
  Num: `No.`,
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
  Num: 1,
  Id: `cho`,
  FirstName: `cho`,
  MiddleName: `seong`,
  LastName: `hwan`,
  Gender: `Male`,
  Birthday: `oct 02 1991`,
  Language: `Kor`,
  RegDate: `jun 01 2021`,
  Status: true,
};

// filter 종류
interface conditionsType {
  [key: string]: string;
  All: string;
  Activated: string;
  Deactivated: string;
}

const conditions: conditionsType = {
  All: `All`,
  Activated: `Activated user`,
  Deactivated: `Deactivated user`,
};

interface registType {
  [key: string]: string;
  latest: string;
  oldest: string;
}

const regist: registType = {
  latest: `By latest registered date`,
  oldest: `By oldest registered date`,
};

const pages: {
  [key: string]: number;
  '10': number;
  '15': number;
  '20': number;
  '30': number;
  '50': number;
} = { '10': 10, '15': 15, '20': 20, '30': 30, '50': 50 };

const UserList = () => {
  const [userActiveFilter, setUserActiveFilter] = useState('All');
  const [userRegistFilter, setUserRegistFilter] = useState('latest');
  const [userPagesFilter, setUserPagesFilter] = useState('15');

  return (
    <>
      <Nav pageName="userList" />
      <Container>
        <NoticeBox>
          <NoticeTextBox>
            <NoticeText>- You can check registered user list.</NoticeText>
            <NoticeText>
              - You can block a user or check sourced file history.
            </NoticeText>
          </NoticeTextBox>
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
        <FilterContainer>
          <FilterBtn
            selectedFilter={userActiveFilter}
            conditions={conditions}
            widthValue={150}
            setFilter={setUserActiveFilter}
            filterName="test"
          />
          <FilterBtn
            selectedFilter={userRegistFilter}
            conditions={regist}
            widthValue={205}
            setFilter={setUserRegistFilter}
            filterName="test"
          />
          <FilterBtn
            selectedFilter={userPagesFilter}
            conditions={pages}
            widthValue={30}
            setFilter={setUserPagesFilter}
            filterName="test"
          />
        </FilterContainer>
        <TableContainer>
          <TableHeader>
            <UserTable userTable={userTableHeader} />
          </TableHeader>
          <TableContents>
            <UserTable userTable={userTableContent} />
          </TableContents>
        </TableContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  margin-left: 292px;
  padding: 20px 10px 0px 20px;
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TableHeader = styled.ul`
  display: flex;
  align-items: center;
  padding: 20px 10px 10px 10px;
  border-bottom: 2px solid rgb(220, 220, 220);
  font-size: 15px;
  font-weight: bold;
`;

const TableContents = styled.ul`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 15px;
  width: 100%;
`;

const SearchIcon = styled(SearchAlt2)`
  width: 30px;
  margin-left: 15px;
  color: skyblue;
`;

export default UserList;
