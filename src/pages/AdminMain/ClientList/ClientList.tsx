import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';
import FilterBtn from 'components/Filter/FilterBtn';
import ClientTable from './ClientTable';

// 공용 컴포넌트 사용을 위한 상수데이터
const clientTableHeader = {
  id: `No.`,
  loginId: `Client Id`,
  clientName: `Client Name`,
  remarks: `Client Description`,
  pwInit: `Password Init`,
  dateOfCreated: `Client Regist Date`,
  Edit: `Client Edit`,
  Delete: `Client Delete`,
};

// filter 종류
interface conditionsType {
  [key: string]: string;
  recent: string;
  old: string;
}

const conditions: conditionsType = {
  recent: `By recent registered date`,
  old: `By old registered date`,
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

interface Iprops {
  setClientId: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const ClientList = ({ setClientId, setPage }: Iprops) => {
  const [clientRegistFilter, setCilentRegistFilter] = useState('recent');
  const [clientPagesFilter, setClientPagesFilter] = useState('15');
  const [clientList, setClientList] = useState([
    {
      id: '',
      loginId: '',
      clientName: '',
      remarks: '',
      pwInit: '',
      dateOfCreated: '',
      Edit: '',
      Delete: '',
    },
  ]);

  useEffect(() => {
    fetch('/data/clientList.json')
      .then((res) => res.json())
      .then((res) => setClientList(res));
  }, []);

  return (
    <Container>
      <NoticeBox>
        <NoticeTextBox>
          <NoticeText>- You can register or delete client account.</NoticeText>
          <NoticeText>- Initial password is *1234!</NoticeText>
        </NoticeTextBox>
        <NewClientBtn
          onClick={() => {
            setPage('newClient');
          }}
        >
          Register Client
        </NewClientBtn>
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
      <FilterContainer>
        <FilterBtn
          selectedFilter={clientRegistFilter}
          conditions={conditions}
          widthValue={210}
          setFilter={setCilentRegistFilter}
        />
        <FilterBtn
          selectedFilter={clientPagesFilter}
          conditions={pages}
          widthValue={30}
          setFilter={setClientPagesFilter}
        />
      </FilterContainer>
      <TableContainer>
        <TableHeader>
          <ClientTable
            client={clientTableHeader}
            setClientId={setClientId}
            setPage={setPage}
          />
        </TableHeader>
        {clientList &&
          clientList.map((client) => {
            return (
              <TableContents key={client.id}>
                <ClientTable
                  client={client}
                  setClientId={setClientId}
                  setPage={setPage}
                />
              </TableContents>
            );
          })}
      </TableContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 60px 0 0 200px;
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
`;

const SearchIcon = styled(SearchAlt2)`
  width: 30px;
  margin-left: 15px;
  color: skyblue;
`;

export default ClientList;
