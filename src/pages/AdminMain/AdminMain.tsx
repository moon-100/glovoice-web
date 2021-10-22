// import AdminSingin from 'pages/AdminSignin/AdminSignin';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from 'components/Nav/Nav';
// import { useDispatch, useSelector } from 'react-redux';
// import { increment, RootState } from 'index';
// import { Dispatch } from 'redux';
import ClientList from './ClientList/ClientList';
import ClientDetail from './ClientList/ClientDetail';
import UserList from './UserList/UserList';
import UserDetail from './UserList/UserDetail';
import SourcingManageList from './SourcingManage/SourcingManageList';
import SourcingStatusList from './SourcingStatus/SourcingStatusList';
import SourcingManegeDetail from './SourcingManage/SourcingManegeDetail';
import SourcingStatusDetail from './SourcingStatus/SourcingStatusDetail';

const AdminMain = () => {
  const [page, setPage] = useState<string>('clientList');
  const [pageStatus, setPageStatus] = useState<JSX.Element>();
  const [clientId, setClientId] = useState<number>(1);
  const [sourcingManageId, setSourcingManageId] = useState<number>(1);
  const [sourcingStatusId, setSourcingStatusId] = useState<number>(1);
  const [userId, setUserId] = useState<number>(1);

  useEffect(() => {
    if (page === 'clientList') {
      setPageStatus(<ClientList setClientId={setClientId} setPage={setPage} />);
    }
    if (page === 'newClient') {
      setPageStatus(
        <ClientDetail clientId={clientId} setPage={setPage} page />,
      );
    }
    if (page === 'clientDetail') {
      setPageStatus(
        <ClientDetail clientId={clientId} setPage={setPage} page={false} />,
      );
    }
    if (page === 'userList') {
      setPageStatus(<UserList setUserId={setUserId} setPage={setPage} />);
    }
    if (page === 'userDetail') {
      setPageStatus(<UserDetail userId={userId} />);
    }
    if (page === 'sourcingManageList') {
      setPageStatus(
        <SourcingManageList
          setSourcingManageId={setSourcingManageId}
          setPage={setPage}
        />,
      );
    }
    if (page === 'sourcingManageDetail') {
      setPageStatus(
        <SourcingManegeDetail sourcingManageId={sourcingManageId} />,
      );
    }
    if (page === 'sourcingStatusList') {
      setPageStatus(
        <SourcingStatusList
          setSourcingStatusId={setSourcingStatusId}
          setPage={setPage}
        />,
      );
    }
    if (page === 'sourcingStatusDetail') {
      setPageStatus(
        <SourcingStatusDetail sourcingStatusId={sourcingStatusId} />,
      );
    }
  }, [page]);

  // const 꺼내온거 = useSelector((state: RootState) => state);
  // const dispatch: Dispatch = useDispatch();

  return (
    <Container>
      <Nav setPage={setPage} />
      {pageStatus}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
`;

export default AdminMain;
