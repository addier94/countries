import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className='text-white p-3' style={{background: '#111111'}}>
      <Link href='/'>
        <button><span className='font-semibold text-lg'>T</span>ries</button>
      </Link>
    </nav>
  );
};
export default Nav;
