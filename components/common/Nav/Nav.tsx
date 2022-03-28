import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className='text-white p-3 bg-primary'>
      <Link href='/'>
        <button><span className='font-semibold text-lg'>T</span>ries</button>
      </Link>
    </nav>
  );
};
export default Nav;
