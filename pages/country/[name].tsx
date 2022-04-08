import {Layout} from '@/components/common';
import {Countries} from '@/interfaces/all-countries';
import {GetStaticPaths, GetStaticProps} from 'next';
import {localData} from '../../data';
import {showString} from '@/utils/index';
import {FC} from 'react';
import {CountryView} from '@/components/country';

interface Props {
  country:Countries
}

const CountryPage:FC<Props> = ({country}) => {
  return (
    <Layout tittle={country.name.common}>
      {country &&
      <CountryView country={country} />
      }
    </Layout>
  );
};

export default CountryPage;


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const paths = localData.map((country) => ({
    params: {name: showString.makeSlug(country.name.official)},
  }));

  return {paths, fallback: false};
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const {name} = params as { name: string };

  const country = localData.find((country) => showString.makeSlug(country.name.official) === name);

  return {
    props: {
      country: country,
    },
  };
};
