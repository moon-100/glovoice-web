import React from 'react';
import Nav from 'components/Nav/Nav';
import ClientList from './ClientList/ClientList';

const AdminMain = () => {
  return (
    <>
      <Nav />
      <ClientList />
    </>
  );
};

export default AdminMain;
