import {Countries} from '@/interfaces/all-countries';
import {localdata} from 'localdata';
import React, {useEffect, useState} from 'react';
import s from './CountryView.module.css';
import CountryItem from '../CountryItem/CountryItem';

const CountryView = () => {
  const [countries, setCountries] = useState<Countries[]>();

  const getAllCountries = () => {
    const data = localdata as Countries[];
    setCountries(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);
  return (
    <article className={s.root}>
      <section className='flex flex-wrap'>
        {countries && countries.map((item) => (
          <CountryItem key={item.name.official} country={item} />
        ))
        };
      </section>
    </article>
  );
};

export default CountryView;
