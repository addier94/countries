import {Layout} from '@/components/common';
import {CountryView} from '@/components/country';
import type {GetStaticProps, NextPage} from 'next';
import {countryApi} from '@/api/index';
interface Props {
  namei: {fuck: number}
}


const Home: NextPage<Props> = ({namei}) => {
  console.log('props ', namei);

  return (
    <Layout>
      <CountryView />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (ctx) => {
  countryApi;
  return {
    props: {
      namei: 'fuck',
    },
  };
};
