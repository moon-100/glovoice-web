import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

const Filter = () => {
  const [activeFilterSel, setActiveFilterSel] = useState(false);
  const [activePagesSel, setActivePagesSel] = useState(false);
  const [filterConditions, setFilterConditions] = useState('recent');
  const [pagesConditions, setPagesConditions] = useState('15');

  const conditions: {
    [key: string]: string;
    recent: string;
    old: string;
  } = {
    recent: `By recent registered date`,
    old: `By old registered date`,
  };

  const pages: {
    [key: string]: number;
    '10': number;
    '15': number;
    '20': number;
    '30': number;
    '50': number;
  } = { '10': 10, '15': 15, '20': 20, '30': 30, '50': 50 };

  const clickFilterHandler = () => {
    setActiveFilterSel(!activeFilterSel);
  };

  const clickPagesHandler = () => {
    setActivePagesSel(!activePagesSel);
  };

  const filterHandler = (value: string) => {
    setFilterConditions(value);
  };

  const pagesHandler = (value: string) => {
    setPagesConditions(value);
  };

  return (
    <FilterContainer>
      <FilterBox>
        <FilterTextBox>
          <FilterText>{conditions[filterConditions]}</FilterText>
          <ArrowDownIcon onClick={clickFilterHandler} />
        </FilterTextBox>
        <FilterNavBox>
          {activeFilterSel &&
            Object.keys(conditions).map((condition: string) => {
              return (
                <FilterNav
                  key={condition}
                  onClick={() => filterHandler(condition)}
                >
                  {conditions[condition]}
                </FilterNav>
              );
            })}
        </FilterNavBox>
      </FilterBox>
      <FilterBox>
        <FilterTextBox>
          <FilterText>{pages[pagesConditions]}</FilterText>
          <ArrowDownIcon onClick={clickPagesHandler} />
        </FilterTextBox>
        <FilterNavBox>
          {activePagesSel &&
            Object.keys(pages).map((page: string) => {
              return (
                <FilterNav key={page} onClick={() => pagesHandler(page)}>
                  {pages[page]}
                </FilterNav>
              );
            })}
        </FilterNavBox>
      </FilterBox>
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FilterBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
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

export default Filter;
