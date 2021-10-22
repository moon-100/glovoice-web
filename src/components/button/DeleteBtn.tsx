import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { Trash2 } from '@styled-icons/feather/Trash2';

interface DetailInfo {
  id: number;
}

const DeleteBtn = ({ id }: DetailInfo) => {
  const history = useHistory();

  const clickHandler = () => {
    if (id) {
      history.push(`delete/:${id}`);
    }
  };

  return (
    <Delete onClick={clickHandler}>
      <TrashIcon />
    </Delete>
  );
};

const Delete = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.color.black};
  border: none;
  border-radius: 3px;
`;

const TrashIcon = styled(Trash2)`
  width: 20px;
`;

export default DeleteBtn;
