import React from 'react';
import styled from 'styled-components';
import { PASSWORD_INIT } from 'config';

interface Iprops {
  id: number;
}

const PwInitBtn = ({ id }: Iprops) => {
  const passwordInit = () => {
    fetch(`${PASSWORD_INIT}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <PwInit
      alt="passwordInitBtn"
      src="/images/lockIcon.png"
      onClick={() => {
        passwordInit();
      }}
    />
  );
};

const PwInit = styled.img`
  width: 24px;
`;

export default PwInitBtn;
