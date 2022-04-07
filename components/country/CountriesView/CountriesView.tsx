import React, {useContext} from 'react';
import CountryItem from '../CountryItem/CountryItem';
import {CountriesContext} from '../../../context/CountriesContext';

const CountriesView = () => {
  const {countries, countriesListByName, countriesFilteredByRegion, searching, valueToFilterByRegion} = useContext(CountriesContext);

  const countriesList = () => {
    if ( searching ) return countriesListByName;

    if (countriesFilteredByRegion?.length > 0) return countriesFilteredByRegion;

    return countries;
  };

  const tittleForSearch = () => {
    if (searching) {
      return `Countries found for ${searching}`;
    }
    if (countriesFilteredByRegion?.length > 0) {
      return `${countriesFilteredByRegion.length} Countries found for Region ${valueToFilterByRegion}`;
    }
    return `${countries.length} Countries found in the world`;
  };

  return (
    <>
      <h5 className='mx-3 mt-8'> {tittleForSearch()} </h5>
      <section className='flex flex-wrap'>
        {countries && countriesList().map((item) => (
          <CountryItem key={item.id} country={item} />
        ))
        }
      </section>
    </>
  );
};

export default CountriesView;
