import {Layout} from '@/components/common';
import {CountryView} from '@/components/country';
import type {GetStaticProps, NextPage} from 'next';
import {countryApi} from '@/api/index';
import {Countries, optimizedCountries} from '@/interfaces/all-countries';
interface Props {
  countries: Countries[]
}


const Home: NextPage<Props> = ({countries}) => {
  return (
    <Layout>
      <CountryView countries={countries}/>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await countryApi.get<Countries[]>('/all');

  const countries:Countries[] = data.data.map((country, i) => ({
    ...country,
    id: i + 1,
  }));


  return {
    props: {
      countries,
    },
  };
};
