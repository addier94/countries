import {Layout} from '@/components/common';
import {CountryView} from '@/components/country';
import type {GetStaticProps, NextPage} from 'next';
import {countryApi} from '@/api/index';
import {Countries, optimizedCountries} from '@/interfaces/all-countries';
interface Props {
  countries: optimizedCountries[]
}


const Home: NextPage<Props> = ({countries}) => {
  return (
    <Layout>
      <CountryView />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await countryApi.get<Countries[]>('/all');

  const countries:optimizedCountries[] = data.data.map((country, i) => ({
    id: i + 1,
    flag: country.flags.svg,
    name: country.name.common,
    region: country.region,
    population: country.population,
    lang: country.languages || null,
  }));


  return {
    props: {
      countries,
    },
  };
};
