import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';
import FilterBtn from 'components/Filter/FilterBtn';
import Nav from 'components/Nav/Nav';
import SourcingStatusTable from './SourcingStatusTable';

// 공용 컴포넌트 사용을 위한 상수데이터
const sourcingStatusTableHeader = {
  Num: `No.`,
  Title: `Title`,
  Name: `Client Name`,
  LastUp: `Latest update`,
  Progress: `Progress`,
  Status: `Status`,
  PostStatus: `Post status`,
  Detail: `Details`,
};

// 서버에서 받아와야 될 데이터(이건 테스트용)
const sourcingStatusTableContent = {
  Num: 1,
  Title: `크라우드 소싱`,
  Name: `클라이언트 에이`,
  LastUp: `Feb 01 2021 10:53:00 am KST`,
  Progress: 80,
  Status: `마감 대기`,
  PostStatus: true,
};

// filter 종류
interface uploadStatusType {
  [key: string]: string;
  All: string;
  Uploaded: string;
  Failed: string;
  Uploading: string;
}

const uploadStatus: uploadStatusType = {
  All: `All`,
  Uploaded: `Uploaded`,
  Failed: `Failed`,
  Uploading: `Uploading`,
};

interface postStatusType {
  [key: string]: string;
  All: string;
  Posted: string;
  Hidden: string;
}

const postStatus: postStatusType = {
  All: `All`,
  Posted: `Posted`,
  Hidden: `Hidden`,
};

interface registType {
  [key: string]: string;
  latest: string;
  oldest: string;
}

const regist: registType = {
  latest: `By latest uploaded date`,
  oldest: `By oldest uploaded date`,
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

const SourcingStatusList = () => {
  const [sourcingStatusUploadFilter, setSourcingStatusUploadFilter] =
    useState('All');
  const [sourcingStatusPostFilter, setSourcingStatusPostFilter] =
    useState('All');
  const [sourcingStatusRegistFilter, setSourcingStatusRegistFilter] =
    useState('latest');
  const [sourcingStatusPagesFilter, setSourcingStatusPagesFilter] =
    useState('15');

  return (
    <>
      <Nav pageName="crowdStatusList" />
      <Container>
        <NoticeBox>
          <NoticeTextBox>
            <NoticeText>- You can check progress of uploaded file.</NoticeText>
            <NoticeText>
              - You can designate a client to uploaded file.
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
            <SearchInput
              type="text"
              placeholder="Enter title of the file or remarks."
            />
            <SearchIcon />
          </SearchInputBox>
        </SearchBox>
        <FilterContainer>
          <FilterBtn
            selectedFilter={sourcingStatusUploadFilter}
            conditions={uploadStatus}
            widthValue={90}
            setFilter={setSourcingStatusUploadFilter}
            filterName="test"
          />
          <FilterBtn
            selectedFilter={sourcingStatusPostFilter}
            conditions={postStatus}
            widthValue={70}
            setFilter={setSourcingStatusPostFilter}
            filterName="test"
          />
          <FilterBtn
            selectedFilter={sourcingStatusRegistFilter}
            conditions={regist}
            widthValue={205}
            setFilter={setSourcingStatusRegistFilter}
            filterName="test"
          />
          <FilterBtn
            selectedFilter={sourcingStatusPagesFilter}
            conditions={pages}
            widthValue={30}
            setFilter={setSourcingStatusPagesFilter}
            filterName="test"
          />
        </FilterContainer>
        <TableContainer>
          <TableHeader>
            <SourcingStatusTable
              sourcingStatusTable={sourcingStatusTableHeader}
            />
          </TableHeader>
          <TableContents>
            <SourcingStatusTable
              sourcingStatusTable={sourcingStatusTableContent}
            />
          </TableContents>
        </TableContainer>
      </Container>
    </>
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

export default SourcingStatusList;
