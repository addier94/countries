import {Layout} from '@/components/common';
import {CountriesView} from '@/components/country';
import type {GetStaticProps, NextPage} from 'next';
import {countryApi} from '@/api/index';
import {Countries} from '@/interfaces/all-countries';
interface Props {
  countries: Countries[]
}


const Home: NextPage<Props> = ({countries}) => {
  return (
    <Layout>
      {countries.length > 0 &&
      <CountriesView countries={countries}/>
      }
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
