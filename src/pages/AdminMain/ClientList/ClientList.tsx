import React from 'react';
import styled from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';
import ClientFilter from './ClientFilter';
import ClientTable from './ClientTable';

const ClientList = () => {
  return (
    <Container>
      <NoticeBox>
        <NoticeTextBox>
          <NoticeText>- You can register or delete client account.</NoticeText>
          <NoticeText>- Initial password is *1234!</NoticeText>
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
          <SearchInput type="text" placeholder="Enter client ID or name." />
          <SearchIcon />
        </SearchInputBox>
      </SearchBox>
      <ClientFilter />
      <ClientTable />
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

const SearchIcon = styled(SearchAlt2)`
  width: 30px;
  margin-left: 15px;
  color: skyblue;
`;

export default ClientList;
