import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterBtn from 'components/Filter/FilterBtn';
import Nav from 'components/Nav/Nav';
import { SEARCH_USER } from 'config';
import UserTable from './UserTable';

// 공용 컴포넌트 사용을 위한 상수데이터
const userTableHeader = {
  id: `No.`,
  loginId: `Id`,
  userFirstName: `First Name`,
  userMiddleName: `Middle Name`,
  userLastName: `Last Name`,
  gender: `Gender`,
  birthday: `Birthday`,
  language: `Language`,
  dateOfCreated: `Registered Date`,
  detail: `Detail`,
  status: `Status`,
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
  asc: string;
  desc: string;
}
const regist: registType = {
  asc: `By latest registered date`,
  desc: `By oldest registered date`,
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
  const [userRegistFilter, setUserRegistFilter] = useState('asc');
  const [userPagesFilter, setUserPagesFilter] = useState('15');
  const [search, setSearch] = useState('');
  const [userList, setUserList] = useState([
    {
      id: 0,
      loginId: '',
      userFirstName: '',
      userMiddleName: '',
      userLastName: '',
      gender: '',
      birthday: '',
      language: '',
      dateOfCreated: '',
      detail: '',
      status: '',
    },
  ]);

  // mockdata 테스트
  useEffect(() => {
    fetch('/data/userList.json')
      .then((res) => res.json())
      .then((res) => setUserList(res));
  }, []);

  const searchUser = () => {
    fetch(`${SEARCH_USER}?loginId=${search}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
      <Nav pageName="userList" />
      <Container>
        <UserListContainer>
          <NoticeBox>
            <NoticeTextBox>
              <NoticeText>- You can check registered user list.</NoticeText>
              <NoticeText>
                - You can block a user or check sourced file history.
              </NoticeText>
            </NoticeTextBox>
          </NoticeBox>
          <SearchFilterContainer>
            <SearchContainer>
              <SearchHeader>Search</SearchHeader>
              <SearchInputBox>
                <SearchInput
                  type="text"
                  placeholder="Enter client ID or name."
                  onChange={(e) => setSearch(e.target.value)}
                />
                <SearchIcon
                  alt="searchIcon"
                  src="/images/searchIcon.png"
                  onClick={() => searchUser()}
                />
              </SearchInputBox>
              <SearchText>
                *Search criteria depends on admin’s system time zone.
              </SearchText>
            </SearchContainer>
            <FilterContainer>
              <FilterBtn
                selectedFilter={userActiveFilter}
                conditions={conditions}
                widthValue={188}
                setFilter={setUserActiveFilter}
                filterName="User Status"
              />
              <FilterBtn
                selectedFilter={userRegistFilter}
                conditions={regist}
                widthValue={188}
                setFilter={setUserRegistFilter}
                filterName="Sort by"
              />
              <FilterBtn
                selectedFilter={userPagesFilter}
                conditions={pages}
                widthValue={80}
                setFilter={setUserPagesFilter}
                filterName="Page"
              />
            </FilterContainer>
          </SearchFilterContainer>
          <TableContainer>
            <TableHeader>
              <UserTable user={userTableHeader} />
            </TableHeader>
            {userList &&
              userList.map((user) => {
                return (
                  <TableContents key={user.id}>
                    <UserTable user={user} />
                  </TableContents>
                );
              })}
          </TableContainer>
        </UserListContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 292px;
`;

const UserListContainer = styled.div`
  max-width: 1020px;
  width: 100%;
  min-height: 100vmax;
  margin-top: 64px;
`;

const NoticeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  padding: 24px 16px;
  border-radius: 8px;
  background-color: #e9eef8;
`;

const NoticeTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 48px;
  line-height: 1.5;
  letter-spacing: 0.5px;
`;

const NoticeText = styled.div`
  font-family: SpoqaHanSans;
  font-size: 16px;
`;

const SearchFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 44px;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 92px;
`;

const SearchHeader = styled.div`
  height: 20px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: 0.15px;
`;

const SearchInputBox = styled.div`
  position: relative;
  margin-top: 8px;
`;

const SearchInput = styled.input`
  width: 336px;
  height: 42px;
  padding: 8px 6px 8px 8px;
  border-radius: 4px;
  border: solid 1px #aaa;

  ::placeholder {
    font-family: SpoqaHanSans;
    font-size: 14px;
    line-height: 1.43;
    letter-spacing: 0.25px;
    color: #ccc;
  }

  :focus {
    border: none;
    outline: solid 1px #1a61f7;
    background-color: #e3eaf9;
  }
`;

const SearchIcon = styled.img`
  position: absolute;
  top: 9px;
  right: 8px;
  width: 24px;
`;

const SearchText = styled.div`
  margin-top: 4px;
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.4px;
  color: #888;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 22px;
`;

const TableHeader = styled.ul`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: 2px solid #979797;
  background-color: #f4f4f4;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: 0.15px;
`;

const TableContents = styled.ul`
  display: flex;
  align-items: center;
  height: 56px;
`;

export default UserList;
