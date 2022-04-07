import {Countries} from '@/interfaces/all-countries';
import {createContext} from 'react';

interface ContextProps {
  countries: Countries[];
  countriesListByName:Countries[]
  countriesFilteredByRegion: Countries[]
  valueToFilterByRegion: string

  // methods
  setAllCountries: (countries: Countries[]) => void
  searchByName: (name:string) => void
  filterByRegion: (regionSelected:string) => void
}

export const CountriesContext = createContext({} as ContextProps);
