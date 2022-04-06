import React, {useContext} from 'react';
import CountryItem from '../CountryItem/CountryItem';
import {CountriesContext} from '../../../context/CountriesContext';

const CountriesView = () => {
  const {countries, countriesListByName, countriesFilteredByRegion} = useContext(CountriesContext);

  const filteredOrCountries = () => {
    if (countriesListByName?.length > 0) return countriesListByName;
    if (countriesFilteredByRegion?.length > 0 ) return countriesFilteredByRegion;
    return countries;
  };

  return (
    <section className='flex flex-wrap'>
      <h5 className='mx-3'>{filteredOrCountries().length} Countries found</h5>
      {countries && filteredOrCountries().map((item) => (
        <CountryItem key={item.id} country={item} />
      ))
      }
    </section>
  );
};

export default CountriesView;
