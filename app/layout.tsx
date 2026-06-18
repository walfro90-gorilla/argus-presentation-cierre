import React from 'react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Argus Presentation Cierre</title>
      </Head>
      {children}
    </>
  );
};

export default Layout;