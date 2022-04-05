import {Countries} from '@/interfaces/all-countries';
import {createContext} from 'react';

interface ContextProps {
  countries: Countries[];

  // methods
  setCountries: (countries: Countries[]) => void
}

export const CountriesContext = createContext({} as ContextProps);
