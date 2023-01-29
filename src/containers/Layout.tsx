import Head from 'next/head';
import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
