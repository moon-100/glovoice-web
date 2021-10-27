import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

interface DetailInfo {
  id: number;
  uri: string;
}

const DetailBtn = ({ id, uri }: DetailInfo) => {
  const history = useHistory();

  const clickHandler = () => {
    history.push(`${uri}/${id}`);
  };

  return (
    <Detail alt="detailBtn" src="/images/editIcon.png" onClick={clickHandler} />
  );
};

const Detail = styled.img`
  width: 24px;
`;

export default DetailBtn;
