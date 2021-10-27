import React, { useState } from 'react';
import styled from 'styled-components';
import DetailBtn from 'components/Button/DetailBtn';
import { BASE_URL } from 'config';

interface Iprops {
  sourcingManageTable: {
    id: string | number;
    title: string;
    name?: string;
    size: string | number;
    remarks?: string;
    upDate: string;
    upStatus: string;
    postStatus?: string;
    detail?: string;
  };
}

const SourcingManageTable = ({ sourcingManageTable }: Iprops) => {
  const [activeWindow, setActiveWindow] = useState(false);

  const clickWindowHandler = () => {
    setActiveWindow(!activeWindow);
  };

  const conditionHandler = (value: string) => {
    if (value === 'NONE') {
      fetch(`${BASE_URL}/user/${sourcingManageTable.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify({ postStatus: value }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } else if (value === 'POST') {
      fetch(`${BASE_URL}/user/${sourcingManageTable.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify({ postStatus: value }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    } else if (value === 'HIDE') {
      fetch(`${BASE_URL}/user/${sourcingManageTable.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application.json' },
        body: JSON.stringify({ postStatus: value }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };

  return (
    <>
      <Num>{sourcingManageTable.id}</Num>
      <Title>{sourcingManageTable.title}</Title>
      <Name>
        {typeof sourcingManageTable.name === 'string'
          ? sourcingManageTable.name
          : '-'}
      </Name>
      <Size>{sourcingManageTable.size}</Size>
      <Remarks>{sourcingManageTable.remarks}</Remarks>
      <UpDate>
        {typeof sourcingManageTable.upDate === 'string'
          ? sourcingManageTable.upDate
          : '-'}
      </UpDate>
      <UpStatus>{sourcingManageTable.upStatus}</UpStatus>
      <PostStatus>
        {typeof sourcingManageTable.id === 'string' ? (
          sourcingManageTable.postStatus
        ) : (
          <FilterBox activeWindow={activeWindow}>
            <FilterTextBox onClick={clickWindowHandler}>
              {sourcingManageTable.postStatus === 'NONE' && (
                <NoneText activeWindow={activeWindow}>-</NoneText>
              )}
              {sourcingManageTable.postStatus === 'POST' && (
                <ActiveText activeWindow={activeWindow}>Post</ActiveText>
              )}
              {sourcingManageTable.postStatus === 'HIDE' && (
                <DeactiveText activeWindow={activeWindow}>Hide</DeactiveText>
              )}

              {activeWindow ? (
                <ArrowUpIcon alt="arrowUpIcon" src="/images/arrowUpIcon.png" />
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
                <FilterNav onClick={() => conditionHandler('NONE')}>
                  None
                </FilterNav>
                <FilterNav onClick={() => conditionHandler('POST')}>
                  Post
                </FilterNav>
                <FilterNav onClick={() => conditionHandler('HIDE')}>
                  Hide
                </FilterNav>
              </FilterNavBox>
            )}
          </FilterBox>
        )}
      </PostStatus>
      <Detail>
        {typeof sourcingManageTable.id === 'number' ? (
          <DetailBtn id={sourcingManageTable.id} uri="crowdFile" />
        ) : (
          sourcingManageTable.detail
        )}
      </Detail>
    </>
  );
};

const Num = styled.li`
  width: 32px;
  margin-left: 8px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.li`
  width: 184px;
  margin-left: 14px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Name = styled.li`
  width: 96px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Size = styled.li`
  width: 96px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Remarks = styled.li`
  width: 96px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UpDate = styled.li`
  width: 160px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UpStatus = styled.li`
  width: 72px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostStatus = styled.li`
  width: 88px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Detail = styled.li`
  width: 54px;
  margin-left: 16px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: 0.25px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const FilterBox = styled.div<{ activeWindow: boolean }>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 92px;
  height: 30px;
  margin-top: -15px;
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

const NoneText = styled.div<{ activeWindow: boolean }>`
  width: 60px;
  height: 14px;
  font-family: SpoqaHanSans;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: 0.35px;

  ${({ activeWindow }) => activeWindow && `color: #ccc;`}
`;

const ActiveText = styled.div<{ activeWindow: boolean }>`
  font-family: SpoqaHanSans;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: 0.35px;
  color: #1a61f7;

  ${({ activeWindow }) => activeWindow && `color: #ccc;`}
`;

const DeactiveText = styled.div<{ activeWindow: boolean }>`
  width: 60px;
  height: 14px;
  font-family: SpoqaHanSans;
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: 0.35px;
  color: #e44646;

  ${({ activeWindow }) => activeWindow && `color: #ccc;`}
`;

const ArrowUpIcon = styled.img`
  width: 12px;
`;

const ArrowDownIcon = styled.img`
  width: 12px;
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
  height: 30px;
`;

const FilterNav = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  margin-top: -1px;
  padding: 8px;
  border-top: 1px solid rgb(220, 220, 220);
  font-family: SpoqaHanSans;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.21px;
  background-color: white;

  :hover {
    background-color: #3880f7;
    color: #fff;
  }
`;

export default SourcingManageTable;
