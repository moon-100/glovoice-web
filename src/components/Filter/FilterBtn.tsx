import React, { useState } from 'react';
import styled from 'styled-components';

interface Iprops {
  selectedFilter: string;
  conditions: any;
  widthValue: number;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  filterName: string;
}

const FilterBtn = ({
  selectedFilter,
  conditions,
  widthValue,
  setFilter,
  filterName,
}: Iprops) => {
  const [activeWindow, setActiveWindow] = useState(false);

  const clickWindowHandler = () => {
    setActiveWindow(!activeWindow);
  };

  const conditionHandler = (value: string) => {
    setFilter(value);
    setActiveWindow(!activeWindow);
  };

  return (
    <Container style={{ width: `${widthValue}px` }}>
      <Header>{filterName}</Header>
      <FilterContainer>
        <FilterBox onClick={clickWindowHandler} activeWindow={activeWindow}>
          <FilterText activeWindow={activeWindow}>
            {conditions[selectedFilter]}
          </FilterText>
          {activeWindow ? (
            <ArrowUpIcon alt="arrowUpIcon" src="/images/arrowUpIcon.png" />
          ) : (
            <ArrowDownIcon
              alt="arrowDownIcon"
              src="/images/arrowDownIcon.png"
            />
          )}
        </FilterBox>
        {activeWindow && (
          <FilterNavBox>
            <FilterDefault onClick={clickWindowHandler} />
            {Object.keys(conditions).map((condition: string) => {
              return (
                <FilterNav
                  key={condition}
                  onClick={() => conditionHandler(condition)}
                >
                  {conditions[condition]}
                </FilterNav>
              );
            })}
          </FilterNavBox>
        )}
      </FilterContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  z-index: 10001;
`;

const Header = styled.div`
  height: 20px;
  font-family: SpoqaHanSans;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;
  letter-spacing: 0.15px;
`;

const FilterContainer = styled.div`
  position: relative;
  margin-top: 8px;
`;

const FilterBox = styled.div<{ activeWindow: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 42px;
  padding: 9px 8px;
  border-radius: 4px;

  ${({ activeWindow }) => !activeWindow && `border: solid 1px #aaa;`}
`;

const FilterText = styled.div<{ activeWindow: boolean }>`
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.21px;

  ${({ activeWindow }) => activeWindow && `color: #ccc;`}
`;

const ArrowDownIcon = styled.img`
  width: 24px;
`;

const ArrowUpIcon = styled.img`
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
`;

const FilterDefault = styled.div`
  height: 42px;
`;

const FilterNav = styled.div`
  display: flex;
  align-items: center;
  height: 42px;
  margin-top: -1px;
  padding: 8px;
  border-top: 1px solid rgb(220, 220, 220);
  font-family: SpoqaHanSans;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 0.21px;
  background-color: white;

  :hover {
    background-color: #3880f7;
    color: #fff;
  }
`;

export default FilterBtn;
