import {Countries} from '@/interfaces/all-countries';
import {FC, useReducer} from 'react';
import {CountriesContext, countriesReducer} from '.';


export interface CountriesState {
  countries: Countries[];
}

const COUNTRIES_INITIAL_STATE: CountriesState = {
  countries: [],
};

export const CountriesProvider:FC = ({children}) => {
  const [state, dispatch] = useReducer(countriesReducer, COUNTRIES_INITIAL_STATE);

  const setCountries = (countries:Countries[]) => {
    console.log('countries ', countries);
    dispatch({type: '[Countries] - Set Countries', payload: countries});
  };

  return (
    <CountriesContext.Provider value={{
      ...state,

      setCountries,
    }}>
      {children}
    </CountriesContext.Provider>
  );
};
