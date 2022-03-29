import {Countries} from '@/interfaces/all-countries';
import {createContext, FC, useReducer} from 'react';
interface ContextProps {
  countries: Countries[],
  setAllCountries: (countries: Countries[]) => void
}
const COUNTRY_INITIAL_STATE: CountryState = {
  countries: [],
};
interface CountryState {
  countries: Countries[]
}

export const CountryContext = createContext({} as ContextProps);

// Reducer
const SET_ALL_COUNTRIES = 'SET_ALL_COUNTRIES';
type CountryActionType =
  | {type: typeof SET_ALL_COUNTRIES, payload: Countries[]}

export const countryReducer = (state:CountryState, action: CountryActionType): CountryState => {
  switch (action.type) {
    case SET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    default:
      return state;
  }
};


export const CountryProvider:FC = ({children}) => {
  const [state, dispatch] = useReducer(countryReducer, COUNTRY_INITIAL_STATE);
  const setAllCountries = (countries:Countries[]) => {
    dispatch({type: SET_ALL_COUNTRIES, payload: countries});
  };

  return (
    <CountryContext.Provider value={{
      ...state,

      setAllCountries,
    }}>
      {children}
    </CountryContext.Provider>
  );
};
