import React, { useState } from 'react';
import styled from 'styled-components';
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
        <SourcingStatusContainer>
          <NoticeBox>
            <NoticeTextBox>
              <NoticeText>
                - You can check progress of uploaded file.
              </NoticeText>
              <NoticeText>
                - You can designate a client to uploaded file.
              </NoticeText>
            </NoticeTextBox>
          </NoticeBox>
          <SearchFilterContainer>
            <SearchContainer>
              <SearchHeader>Search</SearchHeader>
              <SearchInputBox>
                <SearchInput
                  type="text"
                  placeholder="Enter title of the file or remarks."
                />
                <SearchIcon alt="searchIcon" src="/images/searchIcon.png" />
              </SearchInputBox>
              <SearchText>
                *Search criteria depends on admin’s system time zone.
              </SearchText>
            </SearchContainer>
            <FilterContainer>
              <FilterBtn
                selectedFilter={sourcingStatusUploadFilter}
                conditions={uploadStatus}
                widthValue={102}
                setFilter={setSourcingStatusUploadFilter}
                filterName="Upload status"
              />
              <FilterBtn
                selectedFilter={sourcingStatusPostFilter}
                conditions={postStatus}
                widthValue={102}
                setFilter={setSourcingStatusPostFilter}
                filterName="Post status"
              />
              <FilterBtn
                selectedFilter={sourcingStatusRegistFilter}
                conditions={regist}
                widthValue={188}
                setFilter={setSourcingStatusRegistFilter}
                filterName="Sort by"
              />
              <FilterBtn
                selectedFilter={sourcingStatusPagesFilter}
                conditions={pages}
                widthValue={80}
                setFilter={setSourcingStatusPagesFilter}
                filterName="Page"
              />
            </FilterContainer>
          </SearchFilterContainer>
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
        </SourcingStatusContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 292px;
  height: 100vh;
  overflow-y: auto;
`;

const SourcingStatusContainer = styled.div`
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

export default SourcingStatusList;
