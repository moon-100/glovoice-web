import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIosDownwardOutline } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

const UserFilter = () => {
  const [activeConditionSel, setActiveConditionSel] = useState(false);
  const [activeAlignSel, setActiveAlignSel] = useState(false);
  const [activePageSel, setActivePageSel] = useState(false);
  const [conditionSel, setConditionSel] = useState('All');
  const [alignSel, setAlignSel] = useState('latest');
  const [pageSel, setPageSel] = useState('15');

  const conditions: {
    [key: string]: string;
    All: string;
    Activated: string;
    Deactivated: string;
  } = {
    All: `All`,
    Activated: `Activated user`,
    Deactivated: `Deactivated user`,
  };

  const aligns: {
    [key: string]: string;
    latest: string;
    oldest: string;
  } = {
    latest: `By latest registered date`,
    oldest: `By oldest registered date`,
  };

  const pages: {
    [key: string]: number;
    '10': number;
    '15': number;
    '20': number;
    '30': number;
    '50': number;
  } = { '10': 10, '15': 15, '20': 20, '30': 30, '50': 50 };

  const clickConditionHandler = () => {
    setActiveConditionSel(!activeConditionSel);
  };

  const clickAlignHandler = () => {
    setActiveAlignSel(!activeAlignSel);
  };

  const clickPageHandler = () => {
    setActivePageSel(!activePageSel);
  };

  const conditionHandler = (value: string) => {
    setConditionSel(value);
  };

  const alignHandler = (value: string) => {
    setAlignSel(value);
  };

  const pageHandler = (value: string) => {
    setPageSel(value);
  };

  return (
    <FilterContainer>
      <FilterBox>
        <FilterTextBox>
          <FilterText style={{ width: '150px' }}>
            {conditions[conditionSel]}
          </FilterText>
          <ArrowDownIcon onClick={clickConditionHandler} />
        </FilterTextBox>
        <FilterNavBox>
          {activeConditionSel &&
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

      <FilterBox>
        <FilterTextBox>
          <FilterText>{aligns[alignSel]}</FilterText>
          <ArrowDownIcon onClick={clickAlignHandler} />
        </FilterTextBox>
        <FilterNavBox>
          {activeAlignSel &&
            Object.keys(aligns).map((align: string) => {
              return (
                <FilterNav key={align} onClick={() => alignHandler(align)}>
                  {aligns[align]}
                </FilterNav>
              );
            })}
        </FilterNavBox>
      </FilterBox>

      <FilterBox>
        <FilterTextBox>
          <FilterText>{pages[pageSel]}</FilterText>
          <ArrowDownIcon onClick={clickPageHandler} />
        </FilterTextBox>
        <FilterNavBox>
          {activePageSel &&
            Object.keys(pages).map((page: string) => {
              return (
                <FilterNav key={page} onClick={() => pageHandler(page)}>
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

export default UserFilter;
