import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FilterBtn from 'components/Filter/FilterBtn';
import Nav from 'components/Nav/Nav';
import { useHistory } from 'react-router';
// import { BASE_URL, SEARCH_CLIENT } from 'config';
import { SEARCH_CLIENT } from 'config';
import ClientTable from './ClientTable';

// 공용 컴포넌트 사용을 위한 상수데이터
const clientTableHeader = {
  id: `No.`,
  loginId: `ID`,
  clientName: `Name`,
  remarks: `Remarks`,
  pwInit: `Initialize password`,
  dateOfCreated: `Registered date`,
  details: `Details`,
  delete: `Delete`,
};

// filter 종류
interface conditionsType {
  [key: string]: string;
  asc: string;
  desc: string;
}
const conditions: conditionsType = {
  asc: `By recent registered date`,
  desc: `By old registered date`,
};
interface pagesType {
  [key: string]: number;
  '10': number;
  '15': number;
  '20': number;
  '30': number;
  '50': number;
}
const pages: pagesType = { '10': 10, '15': 15, '20': 20, '30': 30, '50': 50 };

const ClientList = () => {
  const [clientRegistFilter, setCilentRegistFilter] = useState('asc');
  const [clientPagesFilter, setClientPagesFilter] = useState('15');
  const [search, setSearch] = useState('');
  const [clientList, setClientList] = useState([
    {
      id: '',
      loginId: '',
      clientName: '',
      remarks: '',
      pwInit: '',
      dateOfCreated: '',
      details: '',
      delete: '',
    },
  ]);

  const history = useHistory();

  // mockdata 테스트
  useEffect(() => {
    fetch('/data/clientList.json')
      .then((res) => res.json())
      .then((res) => setClientList(res));
  }, []);

  // server 통신
  // useEffect(() => {
  //   fetch(`${BASE_URL}/client?page=1&sort=${clientPagesFilter}&order=${clientRegistFilter}`)
  //     .then((res) => res.json())
  //     .then((res) => setClientList(res));
  // }, []);

  const searchClient = () => {
    fetch(`${SEARCH_CLIENT}?loginId=${search}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    // fetch(
    //   `${BASE_URL}/client?page=1&sort=${clientPagesFilter}&order=${clientRegistFilter}`,
    // )
    //   .then((res) => res.json())
    //   .then((res) => setClientList(res));
    console.log('test');
  }, [clientRegistFilter, clientPagesFilter]);

  return (
    <>
      <Nav pageName="clientList" />
      <Container>
        <ClientListContainer>
          <NoticeBox>
            <NoticeTextBox>
              <NoticeText>
                - You can register or delete client account.
              </NoticeText>
              <NoticeText>- Initial password is *1234!</NoticeText>
            </NoticeTextBox>
            <NewClientBtn
              onClick={() => {
                history.push('/client/0');
              }}
            >
              REGISTER CLIENT
            </NewClientBtn>
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
                  onClick={() => searchClient()}
                />
              </SearchInputBox>
              <SearchText>
                *Search criteria depends on admin’s system time zone.
              </SearchText>
            </SearchContainer>
            <FilterContainer>
              <FilterBtn
                selectedFilter={clientRegistFilter}
                conditions={conditions}
                widthValue={200}
                setFilter={setCilentRegistFilter}
                filterName="Sort by"
              />
              <FilterBtn
                selectedFilter={clientPagesFilter}
                conditions={pages}
                widthValue={80}
                setFilter={setClientPagesFilter}
                filterName="Page"
              />
            </FilterContainer>
          </SearchFilterContainer>
          <TableContainer>
            <TableHeader>
              <ClientTable client={clientTableHeader} />
            </TableHeader>
            {clientList &&
              clientList.map((client) => {
                return (
                  <TableContents key={client.id}>
                    <ClientTable client={client} />
                  </TableContents>
                );
              })}
          </TableContainer>
        </ClientListContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 292px;
`;

const ClientListContainer = styled.div`
  max-width: 1020px;
  width: 100%;
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

const NewClientBtn = styled.button`
  width: 200px;
  height: 48px;
  padding: 12px 16px;
  border: none;
  border-radius: 24px;
  background-color: #1a61f7;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.7;
  letter-spacing: 1.25px;
  color: white;
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

export default ClientList;
