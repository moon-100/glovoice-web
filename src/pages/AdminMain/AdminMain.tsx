import React from 'react';
import Nav from 'components/Nav/Nav';
import ClientList from './ClientList/ClientList';
// import ClientDetail from './ClientList/ClientDetail';
// import UserList from './UserList/UserList';

const AdminMain = () => {
  return (
    <>
      <Nav />
      <ClientList />
      {/* <ClientDetail /> */}
      {/* <UserList /> */}
    </>
  );
};

export default AdminMain;
