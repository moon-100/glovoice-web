import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchAlt2 } from '@styled-icons/boxicons-regular/SearchAlt2';
import FilterBtn from 'components/Filter/FilterBtn';
import Nav from 'components/Nav/Nav';
import SourcingManageTable from './SourcingManageTable';

// 공용 컴포넌트 사용을 위한 상수데이터
const sourcingManageTableHeader = {
  Num: `No.`,
  Title: `Title`,
  Name: `Client Name`,
  Size: `File size`,
  Remarks: `Remarks`,
  UpDate: `Uploaded date`,
  UpStatus: `Upload status`,
  PostStatus: `Post status`,
  Detail: `Details`,
};

// 서버에서 받아와야 될 데이터(이건 테스트용)
const sourcingManageTableContent = {
  Num: 1,
  Title: `클라우드 소싱`,
  Name: `클라이언트`,
  Size: 23.1,
  Remarks: `메모정보`,
  UpDate: `Feb 02 2021 10:53:00 am KST`,
  UpStatus: `완료`,
  PostStatus: `Post`,
};

// filter 종류
interface uploadStatusType {
  [key: string]: string;
  All: string;
  Completed: string;
  Failed: string;
  Uploading: string;
}

const uploadStatus: uploadStatusType = {
  All: `All`,
  Completed: `Completed`,
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
  latest: `By latest registered date`,
  oldest: `By oldest registered date`,
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

const SourcingManageList = () => {
  const [sourcingManageUploadFilter, setSourcingManageUploadFilter] =
    useState('All');
  const [sourcingManagePostFilter, setSourcingManagePostFilter] =
    useState('All');
  const [sourcingManageRegistFilter, setSourcingManageRegistFilter] =
    useState('latest');
  const [sourcingManagePagesFilter, setSourcingManagePagesFilter] =
    useState('15');

  return (
    <>
      <Nav pageName="crowdFileList" />
      <Container>
        <SourcingManageContainer>
          <NoticeBox>
            <NoticeTextBox>
              <NoticeText>
                - You can check progress of uploaded file.
              </NoticeText>
              <NoticeText>
                - You can designate a client to uploaded file.
              </NoticeText>
            </NoticeTextBox>
            <NewUploadBtn
            // onClick={() => {
            //   setPage('UploadFile');
            // }}
            >
              Upload File
            </NewUploadBtn>
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
              selectedFilter={sourcingManageUploadFilter}
              conditions={uploadStatus}
              widthValue={90}
              setFilter={setSourcingManageUploadFilter}
              filterName="test"
            />
            <FilterBtn
              selectedFilter={sourcingManagePostFilter}
              conditions={postStatus}
              widthValue={70}
              setFilter={setSourcingManagePostFilter}
              filterName="test"
            />
            <FilterBtn
              selectedFilter={sourcingManageRegistFilter}
              conditions={regist}
              widthValue={205}
              setFilter={setSourcingManageRegistFilter}
              filterName="test"
            />
            <FilterBtn
              selectedFilter={sourcingManagePagesFilter}
              conditions={pages}
              widthValue={30}
              setFilter={setSourcingManagePagesFilter}
              filterName="test"
            />
          </FilterContainer>
          <TableContainer>
            <TableHeader>
              <SourcingManageTable
                sourcingManageTable={sourcingManageTableHeader}
              />
            </TableHeader>
            <TableContents>
              <SourcingManageTable
                sourcingManageTable={sourcingManageTableContent}
              />
            </TableContents>
          </TableContainer>
        </SourcingManageContainer>
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

const SourcingManageContainer = styled.div`
  max-width: 1020px;
  width: 100%;
  min-height: 100vmax;
  margin-top: 64px;
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

const NewUploadBtn = styled.button`
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

export default SourcingManageList;
