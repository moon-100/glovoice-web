import React from 'react';
import styled from 'styled-components';
import { Pencil } from '@styled-icons/bootstrap/Pencil';

interface DetailInfo {
  id: number;
  page: string;
  setId: React.Dispatch<React.SetStateAction<number>>;
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const DetailBtn = ({ id, page, setId, setPage }: DetailInfo) => {
  const clickHandler = () => {
    setId(id);
    setPage(`${page}`);
  };

  return (
    <Detail onClick={clickHandler}>
      <PencilIcon />
    </Detail>
  );
};

const Detail = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.color.green};
  border: none;
  border-radius: 3px;
`;

const PencilIcon = styled(Pencil)`
  width: 15px;
`;

export default DetailBtn;
