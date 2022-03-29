import {Countries} from '@/interfaces/all-countries';
import React, {FC} from 'react';
import CountryItem from '../CountryItem/CountryItem';

interface Props {
  countries: Countries[]
}

const CountriesView:FC<Props> = ({countries}) => {
  return (
    <section className='flex flex-wrap'>
      {countries && countries.map((item) => (
        <CountryItem key={item.id} country={item} />
      ))
      };
    </section>
  );
};

export default CountriesView;
