import {Countries} from '@/interfaces/all-countries';
import {CountriesState} from '.';


type CountriesActionType =
  | {type: '[Countries] - Set Countries', payload: Countries[]}

// always return state, can't be mutate something like( state.modal = true)
export const countriesReducer = (state: CountriesState, action: CountriesActionType): CountriesState => {
  switch (action.type) {
    case '[Countries] - Set Countries':
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
};
