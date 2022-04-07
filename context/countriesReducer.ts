import {Countries} from '@/interfaces/all-countries';
import {CountriesState} from '.';


type CountriesActionType =
  | {type: '[Countries] - Set Countries', payload: Countries[]}
  | {type: '[Countries] - List By Name', payload: string}
  | {type: '[Countries] - Filtered By Region', payload: {regionSelected:string}}

export const countriesReducer = (state: CountriesState, action: CountriesActionType): CountriesState => {
  switch (action.type) {
    case '[Countries] - Set Countries':
      return {
        ...state,
        countries: action.payload,
      };

    case '[Countries] - List By Name': {
      let countriesFiltered;
      if (state.valueToFilterByRegion !== '') {
        countriesFiltered = state.countriesFilteredByRegion;
      } else {
        countriesFiltered = state.countries;
      }

      const countriesListByName = countriesFiltered.filter((country) => {
        return country.name.common.toLowerCase().includes(action.payload.toLowerCase());
      });

      return {
        ...state,
        countriesListByName,
        searching: action.payload,
      };
    }

    case '[Countries] - Filtered By Region': {
      const {regionSelected} = action.payload;

      if (regionSelected === '') {
        return {...state, countriesFilteredByRegion: [], valueToFilterByRegion: ''};
      }

      const countriesFilteredByRegion = state.countries.filter((country) => {
        return country.region === regionSelected;
      });

      return {
        ...state,
        countriesFilteredByRegion,
        valueToFilterByRegion: regionSelected,
      };
    }

    default:
      return state;
  }
};
