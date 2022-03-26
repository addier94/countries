import axios from 'axios';

const countryApi = axios.create({
  baseURL: 'https://restcountries.com/v3.1',
});

export default countryApi;
