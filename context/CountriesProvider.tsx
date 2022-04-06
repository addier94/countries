import {Countries} from '@/interfaces/all-countries';
import {FC, useReducer} from 'react';
import {CountriesContext, countriesReducer} from '.';


export interface CountriesState {
  countries: Countries[]
  countriesListByName:Countries[]
  countriesFilteredByRegion: Countries[]
  filterByRegion: string
}
const COUNTRIES_INITIAL_STATE: CountriesState = {
  countries: [],
  countriesListByName: [],
  countriesFilteredByRegion: [],
  filterByRegion: '',
};

export const CountriesProvider:FC = ({children}) => {
  const [state, dispatch] = useReducer(countriesReducer, COUNTRIES_INITIAL_STATE);

  const setAllCountries = (countries:Countries[]) => {
    dispatch({type: '[Countries] - Set Countries', payload: countries});
  };

  const searchByName = (name: string) => {
    dispatch({type: '[Countries] - List By Name', payload: name});
  };

  const filterByRegion = (regionSelected: string) => {
    dispatch({type: '[Countries] - Filtered By Region', payload: {regionSelected}});
  };

  return (
    <CountriesContext.Provider value={{
      ...state,

      setAllCountries,
      searchByName,
      filterByRegion,
    }}>
      {children}
    </CountriesContext.Provider>
  );
};
