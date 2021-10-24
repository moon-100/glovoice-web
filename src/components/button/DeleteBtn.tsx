import { DELETE_CLIENT } from 'config';
import React from 'react';
import styled from 'styled-components';

interface DetailInfo {
  id: number;
}

const DeleteBtn = ({ id }: DetailInfo) => {
  const clickHandler = () => {
    fetch(`${DELETE_CLIENT}/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <Delete
      alt="deleteBtn"
      src="/images/trashIcon.png"
      onClick={clickHandler}
    />
  );
};

const Delete = styled.img`
  width: 24px;
`;

export default DeleteBtn;
