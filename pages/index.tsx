import {Layout} from '@/components/common';
import {CountriesView} from '@/components/country';
import type {GetStaticProps, NextPage} from 'next';
import {Countries} from '@/interfaces/all-countries';
import {useContext, useEffect} from 'react';
import {CountriesContext} from 'context';
import {localData} from 'data';

interface Props {
  allCountries: Countries[]
}

const Home: NextPage<Props> = ({allCountries}) => {
  const {setAllCountries} = useContext(CountriesContext);

  useEffect(() => {
    setAllCountries(allCountries);
  }, []);

  return (
    <Layout tittle="All countries of the world">
      <CountriesView />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  // const data = await countryApi.get<Countries[]>('/all');

  const countries = localData.map((country, i) => ({
    ...country,
    id: i + 1,
  }));


  return {
    props: {
      allCountries: countries,
    },
  };
};
