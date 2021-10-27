import React from 'react';
import styled from 'styled-components';
import { DELETE_CLIENT } from 'config';
import { useHistory } from 'react-router';

interface DetailInfo {
  id: number;
}

const DeleteBtn = ({ id }: DetailInfo) => {
  const history = useHistory();
  const clickHandler = () => {
    fetch(`${DELETE_CLIENT}/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((res) => {
        if (res.Message === 'SUCCESS') {
          alert('Delete complete.');
          history.go(0);
        } else {
          alert('Delete failed');
        }
      });
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
