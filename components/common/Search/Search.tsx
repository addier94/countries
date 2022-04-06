import {CloseIcon} from '@/components/icons';
import React, {ChangeEvent, Dispatch, FC, SetStateAction} from 'react';

interface Props {
  setShowSearch: Dispatch<SetStateAction<boolean>>,
  searchInInputChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Search:FC<Props> = ({setShowSearch, searchInInputChange}) => {
  return (
    <div className='mr-3 absolute left-0 top-12 w-full px-6 md:px-12 lg:px-20 bg-gray-800 py-2 flex justify-between'>
      <input
        placeholder='Search...'
        className='font-extralight outline-none text-2xl w-full mr-4 bg-transparent'
        autoFocus
        onChange={searchInInputChange}/>
      <CloseIcon
        className="fill-current cursor-pointer duration-150 hover:text-gray-400 w-8 h-8"
        onClick={() => setShowSearch(false)} />
    </div>
  );
};

export default Search;
