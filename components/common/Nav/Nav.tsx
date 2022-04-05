import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <header className='text-white p-3 bg-primary fixed w-full z-50'>
      <nav className='flex justify-between'>
        <Link href='/'>
          <button><span className='font-semibold text-lg'>T</span>ries</button>
        </Link>
        <li>
          <a href="/">nice </a>
        </li>

      </nav>
    </header>
  );
};
export default Nav;
