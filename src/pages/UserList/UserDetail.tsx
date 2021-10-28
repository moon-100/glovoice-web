import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router';
import Nav from 'components/Nav/Nav';
import FilterBtn from 'components/Filter/FilterBtn';
import { BASE_URL } from 'config';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import UserDetailTable from './UserDetailTable';

interface paramsType {
  id: string;
}

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
interface activityType {
  [key: string]: string;
  all: string;
  record: string;
  review: string;
}
const activity: activityType = {
  all: `All`,
  record: `Recording`,
  review: `Review`,
};

const userDetailHeader = {
  activity: 'Activity',
  activityDetail: 'Activity Detail',
  itemInfo: 'Item Infomation',
  latestUpdate: 'Latest Update',
};

const ClientDetail = () => {
  const [userHistoryRegistFilter, setUserHistoryRegistFilter] = useState('asc');
  const [userHistoryPagesFilter, setUserHistoryPagesFilter] = useState('15');
  const [userActivityFilter, setUserActivityFilter] = useState('all');
  const [activeWindow, setActiveWindow] = useState(false);
  const [page, setPage] = useState(1);
  const [userDetail, setUserDetail] = useState({
    id: 0,
    loginId: '',
    firstName: '',
    middleName: '',
    lastName: '',
    gender: '',
    dateOfCreated: '',
    dateOfUpdated: '',
    status: false,
    birthday: '',
    password: '',
    role: '',
    languages: '',
    detail: '',
  });
  const [userDetailLists, setUserDetailLists] = useState([
    { id: 0, activity: '', activityDetail: '', itemInfo: '', latestUpdate: '' },
  ]);

  const history = useHistory();
  const { id }: paramsType = useParams();

  // server 에서 데이터 받아옴
  const getToken: any = { Authorization: localStorage.getItem('admin-token') };
  useEffect(() => {
    fetch(`${BASE_URL}/user/${id}`, {
      headers: getToken,
    })
      .then((res) => res.json())
      .then((res) => {
        setUserDetail(res);
      });
  }, []);

  useEffect(() => {
    fetch(`/data/userDetailList.json`)
      .then((res) => res.json())
      .then((res) => {
        setUserDetailLists(res.user);
        setPage(res.count);
      });
  }, []);

  const clickWindowHandler = () => {
    setActiveWindow(!activeWindow);
  };

  const conditionHandler = (value: boolean) => {
    if (value) {
      fetch(`${BASE_URL}/user/${userDetail.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', getToken },
        body: JSON.stringify({ status: true }),
      })
        .then((res) => res.json())
        .then(() => history.go(0));
    } else {
      fetch(`${BASE_URL}/user/${userDetail.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', getToken },
        body: JSON.stringify({ status: false }),
      })
        .then((res) => res.json())
        .then(() => history.go(0));
    }
  };

  return (
    <>
      <Nav pageName="userList" />
      <Container>
        <UserDetailContainer>
          <InfoContainer>
            <InfoHeader>User Information</InfoHeader>
            <IdContainer>
              <IdHeader>ID</IdHeader>
              <IdInput type="text" value={userDetail.loginId} disabled />
            </IdContainer>
            <FirstNameContainer>
              <FirstNameHeader>First Name</FirstNameHeader>
              <FirstNameInput
                type="text"
                value={userDetail.firstName}
                disabled
              />
            </FirstNameContainer>
            <MiddleNameContainer>
              <MiddleNameHeader>Middle Name</MiddleNameHeader>
              <MiddleNameInput
                type="text"
                value={userDetail.middleName}
                disabled
              />
            </MiddleNameContainer>
            <LastNameContainer>
              <LastNameHeader>Last Name</LastNameHeader>
              <LastNameInput type="text" value={userDetail.lastName} disabled />
            </LastNameContainer>
            <GenderContainer>
              <GenderHeader>Gender</GenderHeader>
              <MaleBtn gender={userDetail.gender}>Male</MaleBtn>
              <FemaleBtn gender={userDetail.gender}>Female</FemaleBtn>
              <OthersBtn gender={userDetail.gender}>Others</OthersBtn>
            </GenderContainer>
            <BirthContainer>
              <BirthHeader>Birthday</BirthHeader>
              <BirthContent>
                {userDetail.birthday ? userDetail.birthday.substr(0, 10) : '-'}
              </BirthContent>
            </BirthContainer>
            <LanguageContainer>
              <LanguageHeader>Native Language</LanguageHeader>
              <LanguageContent>
                <LanguageText>{userDetail.languages}</LanguageText>
                <LanguageIcon
                  alt="arrowDownIcon"
                  src="/images/arrowDownIcon.png"
                />
              </LanguageContent>
            </LanguageContainer>
            <RegistContainer>
              <RegistHeader>Registered date</RegistHeader>
              <RegistText>
                {userDetail.dateOfCreated
                  ? userDetail.dateOfCreated.substr(0, 10)
                  : '-'}
              </RegistText>
            </RegistContainer>
          </InfoContainer>
          <BtnContainer id={id}>
            <GotoListBtn
              onClick={() => {
                history.push('/userList');
              }}
            >
              LIST
            </GotoListBtn>
          </BtnContainer>
          <UserStatusContainer>
            <UserStatusHeader>User Status</UserStatusHeader>
            <UserIdContainer>
              <UserIdHeader>ID</UserIdHeader>
              <UserIdContent>
                <FilterBox activeWindow={activeWindow}>
                  <FilterTextBox onClick={clickWindowHandler}>
                    {userDetail.status ? (
                      <ActiveText activeWindow={activeWindow}>
                        Activated
                      </ActiveText>
                    ) : (
                      <DeactiveText activeWindow={activeWindow}>
                        Deactivated
                      </DeactiveText>
                    )}
                    {activeWindow ? (
                      <ArrowUpIcon
                        alt="arrowUpIcon"
                        src="/images/arrowUpIcon.png"
                      />
                    ) : (
                      <ArrowDownIcon
                        alt="arrowDownIcon"
                        src="/images/arrowDownIcon.png"
                      />
                    )}
                  </FilterTextBox>
                  {activeWindow && (
                    <FilterNavBox>
                      <FilterDefault onClick={clickWindowHandler} />
                      <FilterNav onClick={() => conditionHandler(true)}>
                        Activated
                      </FilterNav>
                      <FilterNav onClick={() => conditionHandler(false)}>
                        Deactivated
                      </FilterNav>
                    </FilterNavBox>
                  )}
                </FilterBox>
              </UserIdContent>
            </UserIdContainer>
            <RewardContainer>
              <RewardHeader>Reward</RewardHeader>
              <RewardText>{(1123452).toLocaleString()} Point</RewardText>
            </RewardContainer>
          </UserStatusContainer>
          <UserHistoryContainer>
            <UserHistoryHeaderContainer>
              <UserHistoryHeaderText>User History</UserHistoryHeaderText>
              <UserHistoryHeaderBtn>
                DOWNLOAD SEARCHED RESULT
              </UserHistoryHeaderBtn>
            </UserHistoryHeaderContainer>
            <PeriodContainer>
              <PeriodHeader>Period</PeriodHeader>
              <PeriodContent>
                <FilterBtn
                  selectedFilter={userActivityFilter}
                  conditions={activity}
                  widthValue={152}
                  setFilter={setUserActivityFilter}
                  filterName=""
                />
              </PeriodContent>
            </PeriodContainer>
            <FilterContainer>
              <FilterBtn
                selectedFilter={userHistoryRegistFilter}
                conditions={conditions}
                widthValue={200}
                setFilter={setUserHistoryRegistFilter}
                filterName="type"
              />
              <FilterBtn
                selectedFilter={userHistoryPagesFilter}
                conditions={pages}
                widthValue={80}
                setFilter={setUserHistoryPagesFilter}
                filterName="Page"
              />
            </FilterContainer>
          </UserHistoryContainer>
          <TableContainer>
            <TableHeader>
              <UserDetailTable userDetailList={userDetailHeader} />
            </TableHeader>
            {userDetailLists &&
              userDetailLists.map((userDetailList) => {
                return (
                  <TableContent key={userDetailList.id}>
                    <UserDetailTable userDetailList={userDetailList} />
                  </TableContent>
                );
              })}
          </TableContainer>
          <PaginationContainer>
            {page > 1 && (
              <Stack spacing={2}>
                <PaginationComponent
                  count={page}
                  showFirstButton
                  showLastButton
                  onClick={(e: any) =>
                    setPage(parseInt(e.target.textContent, 10))
                  }
                />
              </Stack>
            )}
          </PaginationContainer>
        </UserDetailContainer>
      </Container>
    </>
  );
};

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 44px;
  padding-bottom: 70px;
`;

const PaginationComponent = styled(Pagination)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: white;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    border: solid 1px #ccc;
    padding: 0;
  }

  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
    min-width: 24px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 292px;
  height: 100vh;
  overflow-y: auto;
`;

const UserDetailContainer = styled.div`
  max-width: 1020px;
  width: 100%;
  margin-top: 64px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoHeader = styled.div`
  width: 139px;
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const IdContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  margin-top: 16px;
  border-top: 2px solid #2d2d2d;
  border-bottom: 1px solid #2d2d2d;
`;

const IdHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const IdInput = styled.input`
  width: 540px;
  height: 40px;
  margin-left: 10px;
  padding-left: 8px;
  border-radius: 8px;
  background-color: #e3eaf9;
  border: solid 1px #1a61f7;
`;

const FirstNameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const FirstNameHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const FirstNameInput = styled.input`
  width: 540px;
  height: 40px;
  margin-left: 10px;
  padding-left: 8px;
  border-radius: 8px;
  background-color: #e3eaf9;
  border: solid 1px #1a61f7;
`;

const MiddleNameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const MiddleNameHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const MiddleNameInput = styled.input`
  width: 540px;
  height: 40px;
  margin-left: 10px;
  padding-left: 8px;
  border-radius: 8px;
  background-color: #e3eaf9;
  border: solid 1px #1a61f7;
`;

const LastNameContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const LastNameHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const LastNameInput = styled.input`
  width: 540px;
  height: 40px;
  margin-left: 10px;
  padding-left: 8px;
  border-radius: 8px;
  background-color: #e3eaf9;
  border: solid 1px #1a61f7;
`;

const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const GenderHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const MaleBtn = styled.button<{ gender: string }>`
  width: 104px;
  height: 32px;
  margin-left: 10px;
  border-radius: 16px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;

  ${({ gender }) =>
    gender === 'MALE'
      ? `border: none;
     background-color: #1a61f7;   
     font-weight: bold; 
     color: #fff;`
      : `border: solid 1px #ccc;
     background-color: #fff;
     opacity: 0.4; 
     color: #666;
     `}
`;

const FemaleBtn = styled.button<{ gender: string }>`
  width: 104px;
  height: 32px;
  margin-left: 10px;
  border-radius: 16px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;

  ${({ gender }) =>
    gender === 'FEMALE'
      ? `border: none;
     background-color: #1a61f7;   
     font-weight: bold; 
     color: #fff;`
      : `border: solid 1px #ccc;
     background-color: #fff;
     opacity: 0.4; 
     color: #666;
     `}
`;

const OthersBtn = styled.button<{ gender: string }>`
  width: 104px;
  height: 32px;
  margin-left: 10px;
  border-radius: 16px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;

  ${({ gender }) =>
    gender === 'OTHER'
      ? `border: none;
     background-color: #1a61f7;   
     font-weight: bold; 
     color: #fff;`
      : `border: solid 1px #ccc;
     background-color: #fff;
     opacity: 0.4; 
     color: #666;
     `}
`;

const BirthContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const BirthHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const BirthContent = styled.div`
  margin-left: 10px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px; ;
`;

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const LanguageHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const LanguageContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 540px;
  height: 40px;
  margin-left: 10px;
  padding: 0 8px;
  border-radius: 4px;
  border: solid 1px #aaa;
  background-color: #fff;
`;

const LanguageText = styled.div`
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
`;

const LanguageIcon = styled.img`
  width: 24px;
  object-fit: contain;
`;

const RegistContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const RegistHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const RegistText = styled.div`
  margin-left: 10px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
`;

const BtnContainer = styled.div<paramsType>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 24px;
`;

const GotoListBtn = styled.button`
  width: 160px;
  height: 48px;
  padding: 12px 16px;
  border-radius: 24px;
  border: solid 1px #1a61f7;
  background-color: white;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 1.25px;
  color: #1a61f7;
`;

const UserStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
`;

const UserStatusHeader = styled.div`
  width: 139px;
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const UserIdContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  margin-top: 16px;
  border-top: 2px solid #2d2d2d;
  border-bottom: 1px solid #2d2d2d;
`;

const UserIdHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const UserIdContent = styled.div`
  position: relative;
`;

const FilterBox = styled.div<{ activeWindow: boolean }>`
  position: absolute;
  left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 152px;
  height: 40px;
  margin-top: -20px;
  border-radius: 4px;

  ${({ activeWindow }) => !activeWindow && `border: solid 1px #aaa;`}
`;

const FilterTextBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 8px;
  align-items: center;
  background-color: #fff;
`;

const ActiveText = styled.div<{ activeWindow: boolean }>`
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #1a61f7;

  ${({ activeWindow }) => activeWindow && `color: #ccc;`}
`;

const DeactiveText = styled.div<{ activeWindow: boolean }>`
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #e44646;

  ${({ activeWindow }) => activeWindow && `color: #ccc;`}
`;

const ArrowUpIcon = styled.img`
  width: 24px;
`;

const ArrowDownIcon = styled.img`
  width: 24px;
`;

const FilterNavBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  border: solid 1px #666;
  overflow: hidden;
  z-index: 10001;
`;

const FilterDefault = styled.div`
  height: 40px;
`;

const FilterNav = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-top: -1px;
  padding: 8px;
  border-top: 1px solid rgb(220, 220, 220);
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.21px;
  background-color: white;

  :hover {
    background-color: #3880f7;
    color: #fff;
  }
`;

const RewardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #2d2d2d;
`;

const RewardHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const RewardText = styled.div`
  margin-left: 10px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
`;

const UserHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 44px;
`;

const UserHistoryHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 16px;
`;

const UserHistoryHeaderText = styled.div`
  width: 139px;
  height: 24px;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const UserHistoryHeaderBtn = styled.button`
  width: 240px;
  height: 32px;
  border-radius: 16px;
  border: none;
  background-color: #1a61f7;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  color: #fff;
`;

const PeriodContainer = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  margin-top: 16px;
  border-top: 2px solid #2d2d2d;
  border-bottom: 1px solid #2d2d2d;
`;

const PeriodHeader = styled.div`
  display: flex;
  align-items: center;
  min-width: 188px;
  width: 188px;
  height: 100%;
  padding-left: 16px;
  background-color: #f3f6f9;
  font-family: SpoqaHanSans;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.25px;
`;

const PeriodContent = styled.div`
  margin-top: -30px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;
`;

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

const TableHeader = styled.ul`
  display: flex;
  align-items: center;
  height: 40px;
  border-bottom: solid 2px #979797;
  background-color: #f4f4f4;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: 0.15px;
`;

const TableContent = styled.ul`
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: 1px solid #ddd;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
`;

export default ClientDetail;
