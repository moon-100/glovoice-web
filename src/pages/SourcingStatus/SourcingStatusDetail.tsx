import React from 'react';

interface Iprops {
  sourcingStatusId: number | undefined;
}

const SourcingStatusDetail = ({ sourcingStatusId }: Iprops) => {
  return <div>{sourcingStatusId}</div>;
};

export default SourcingStatusDetail;
