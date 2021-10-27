import React from 'react';
import Layout from '../../components/Layout';

type Props = {
  propertyA: any;
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '292px',
  height: '100vh',
  overflowY: 'auto'
};

const Sample = (props: Props) => {
  <Layout pageName="sample" styles={containerStyle}>
    {/* 
      <SampleList />
    */}
  </Layout>
};

export default Sample;