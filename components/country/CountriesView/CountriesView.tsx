import React, {useContext} from 'react';
import CountryItem from '../CountryItem/CountryItem';
import {CountriesContext} from '../../../context/CountriesContext';

const CountriesView = () => {
  const {countries, countriesListByName, countriesFilteredByRegion} = useContext(CountriesContext);

  const countriesList = () => {
    if (countriesListByName?.length > 0 && countriesListByName?.length !== countries?.length) {
      return countriesListByName;
    }
    if (countriesFilteredByRegion?.length > 0) {
      return countriesFilteredByRegion;
    }

    return countries;
  };

  return (
    <>
      <h5 className='mx-3'>{countriesList().length} Countries found</h5>
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
