import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';
import { ArrowIosUpwardOutline } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';

interface Iprops {
  selectedFilter: string;
  conditions: any;
  widthValue: number;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterBtn = ({
  selectedFilter,
  conditions,
  widthValue,
  setFilter,
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
    <FilterBox>
      <FilterTextBox onClick={clickWindowHandler}>
        <FilterText style={{ width: `${widthValue}px` }}>
          {conditions[selectedFilter]}
        </FilterText>
        {activeWindow ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </FilterTextBox>
      <FilterNavBox>
        {activeWindow &&
          Object.keys(conditions).map((condition: string) => {
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
    </FilterBox>
  );
};

const FilterBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  z-index: 9000;
`;

const FilterTextBox = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border: 1px solid rgb(220, 220, 220);
`;

const FilterText = styled.div`
  padding: 13px;
  font-size: 17px;
`;
const FilterNavBox = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
`;

const FilterNav = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: -1px;
  padding: 13px;
  border: 1px solid rgb(220, 220, 220);
  font-size: 17px;
`;

const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  width: 25px;
  margin: 0 10px;
`;

const ArrowUpIcon = styled(ArrowIosUpwardOutline)`
  width: 25px;
  margin: 0 10px;
`;

export default FilterBtn;
