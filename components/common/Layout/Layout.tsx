import Head from 'next/head';
import React, {FC} from 'react';
import Nav from '../Nav/Nav';
import s from './Layout.module.css';

interface Props {
  tittle?: string
}

const Layout:FC<Props> = ({children, tittle}) => {
  return (
    <>
      <Head>
        <title>{ tittle || 'Countries App'}</title>
        <meta name="author" content="Alfredo Fernandez" />
        <meta name="description" content={`Information about ${tittle}`} />
        <meta name='keywords' content={`${ tittle }, countries, paises, places `} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className={s.root}>{children}</main>

      <footer className='font-light bg-gray-900'>
        <p className='text-center px-2 py-4 text-gray-500'>
          Copyright © {(new Date).getFullYear()}
          <a href='https://fernandezalfredo.com/'
            className='text-gray-200 ml-1 duration-150 hover:text-blue-700'
            target="_blank" rel="noreferrer">fernandezalfredo.com</a>
        </p>
      </footer>
    </>
  );
};
export default Layout;
