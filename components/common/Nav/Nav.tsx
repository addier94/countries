import Link from 'next/link';
import React, {ChangeEvent, useState} from 'react';

import {Search} from '@/components/common';
import {SearchIcon} from '@/components/icons';
import {useContext, useEffect} from 'react';
import {CountriesContext} from 'context';
import s from './Nav.module.css';

const regionsName = [
  {name: 'All Regions', find: ''},
  {name: 'Americas', find: 'Americas'},
  {name: 'Africa', find: 'Africa'},
  {name: 'Oceania', find: 'Oceania'},
  {name: 'Asia', find: 'Asia'},
  {name: 'Antarctic', find: 'Antarctic'},
  {name: 'Europe', find: 'Europe'}];

const Nav = () => {
  const [showSearch, setShowSearch] = useState(false);
  const {searchByName, filterByRegion} = useContext(CountriesContext);


  const searchInInputChange = (e:ChangeEvent<HTMLInputElement>) => {
    searchByName(e.target.value);
  };

  useEffect(() => {
    if (!showSearch) searchByName('');
  }, [showSearch]);

  return (
    <header className='text-white p-3 bg-primary fixed w-full z-50'>
      <nav className='flex justify-between'>
        <Link href='/'>
          <button><span className='font-semibold text-lg'>T</span>ries</button>
        </Link>

        <ul className='flex'>
          <SearchIcon onClick={()=>setShowSearch(!showSearch)} className="text-white fill-current mr-4 duration-75 cursor-pointer hover:text-gray-400" />
          <li className={s.wrapRegion}>
            Find by Region
            <ul className={s.regionR}>
              {regionsName.map((item) => (
                <li key={item.name}>
                  <button type='button' onClick={() => filterByRegion(item.find)}>{item.name}</button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>

      {showSearch && <Search searchInInputChange={searchInInputChange} setShowSearch={setShowSearch} />}

    </header>
  );
};
export default Nav;
