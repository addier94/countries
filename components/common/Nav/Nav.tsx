import React, {ChangeEvent, useContext, useEffect, Dispatch, FC, SetStateAction, useState} from 'react';

import Link from 'next/link';
import {useRouter} from 'next/router';

import {CloseIcon, SearchIcon} from '@/components/icons';

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
  const router = useRouter();

  return (
    <header className='text-white p-3 bg-primary fixed w-full z-50'>
      <nav className='flex justify-between'>
        <Link href='/'>
          <button><span className='font-semibold text-lg'>T</span>ries</button>
        </Link>


        { router.query.name ?
          <button onClick={() => router.back() }> Go Back</button> :
          <HandleFilter />
        }

      </nav>


    </header>
  );
};
export default Nav;

const HandleFilter = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const {searchByName, filterByRegion, searching} = useContext(CountriesContext);

  const inputChange = (e:ChangeEvent<HTMLInputElement>) => {
    searchByName(e.target.value);
  };

  useEffect(() => {
    if (searching !== '') {
      searchByName('');
    }
  }, [isOpenSearch]);
  return (
    <>
      <ul className='flex'>
        <SearchIcon onClick={()=>setIsOpenSearch(!isOpenSearch)} className="text-white fill-current mr-4 duration-75 cursor-pointer hover:text-gray-400" />
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
      {isOpenSearch && <SearchInput setIsOpenSearch={setIsOpenSearch} inputChange={inputChange} />}
    </>
  );
};

interface PropsSearchInput {
  setIsOpenSearch: Dispatch<SetStateAction<boolean>>
  inputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput:FC<PropsSearchInput> = ({setIsOpenSearch, inputChange}) => {
  return (
    <div className='mr-3 absolute left-0 top-12 w-full px-6 md:px-12 lg:px-20 bg-gray-800 py-2 flex justify-between'>
      <input
        placeholder='Search...'
        className='font-extralight outline-none text-2xl w-full mr-4 bg-transparent'
        autoFocus
        onChange={inputChange}/>
      <CloseIcon
        className="fill-current cursor-pointer duration-150 hover:text-gray-400 w-8 h-8"
        onClick={() => setIsOpenSearch(false)} />
    </div>
  );
};
