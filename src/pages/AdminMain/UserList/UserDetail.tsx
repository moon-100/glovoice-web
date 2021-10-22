import React from 'react';

interface Iprops {
  userId: number | undefined;
}

const UserDetail = ({ userId }: Iprops) => {
  return <div>{userId}</div>;
};

export default UserDetail;
