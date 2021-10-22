import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { UnlockOutline } from '@styled-icons/evaicons-outline/UnlockOutline';

interface PwInitInfo {
  id: number;
}

const PwInitBtn = ({ id }: PwInitInfo) => {
  const history = useHistory();

  const clickHandler = () => {
    if (id) {
      history.push(`Pwinit/:${id}`);
    }
  };

  return (
    <PwInit onClick={clickHandler}>
      <LockIcon />
    </PwInit>
  );
};

const PwInit = styled.button`
  width: 30px;
  height: 30px;
  text-align: center;
  color: white;
  background-color: ${({ theme }) => theme.color.red};
  border: none;
  border-radius: 3px;
`;

const LockIcon = styled(UnlockOutline)`
  width: 20px;
`;

export default PwInitBtn;
