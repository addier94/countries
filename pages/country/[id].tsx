import {Layout} from '@/components/common';
import React, {useEffect, useState} from 'react';
import {countryApi} from '@/api/index';
import {Country} from '@/interfaces/country';
import Image from 'next/image';
import s from './country.module.css';
import {showString} from '@/utils/index';
import {useRouter} from 'next/router';

const CountryPage = () => {
  const [country, setContry] = useState<Country | undefined>();

  const router = useRouter();

  const request = async () => {
    console.log('router', router);
    const {data} = await countryApi.get<Country[]>(`https://restcountries.com/v3.1/name/bolivia?fullText=true`);

    setContry(data[0]);
    console.log('country ', country);
  };
  useEffect(() => {
    request();
  }, []);
  return (
    <Layout>
      {country &&
      <article>
        <section className={s.imgwrapper}>
          <Image
            src={country?.flags.svg}
            objectFit="contain"
            width={320}
            height={220}
          />
          <Image
            src={country?.coatOfArms.svg}
            objectFit="contain"
            width={320}
            height={220}
          />
        </section>
        <section className={s.info_wrapper}>
          <h1 className={s.name}>{country.name.official}</h1>
          <article className={s.info}>
            <h2><span className={s.subject}>Total:</span>
              {showString.readableNumber(country.area)} km²</h2>
            <h3><span className={s.subject}>Independent:</span>
              {JSON.stringify(country.independent)}</h3>
            <h4><span className={s.subject}>Currencies:</span>
              {showString.getCurrencies(country.currencies)}
            </h4>
            <h5><span className={s.subject}>Capital:</span>
              {country.capital}
            </h5>
            <h6><span className={s.subject}>Region:</span>
              {country.region} / {country.subregion}
            </h6>
            <p><span className={s.subject}>Languages: </span>
              {showString.objToString(country.languages)}
            </p>
            <p><span className={s.subject}>Borders: </span>
              {country.borders.join(', ')}
            </p>
            <p><span className={s.subject}>Population: </span>
              {showString.readableNumber(country.population)}
            </p>
            <p><span className={s.subject}>Timezones: </span>
              {country.timezones.join(', ')}
            </p>
            <p><span className={s.subject}>PostalCode: </span>
              {country?.postalCode?.format ? country.postalCode.format : '#####'}
            </p>
            <p><span className={s.subject}>Ubication: </span>
              <a className='text-blue-700 underline' target="_blank" href={country.maps.googleMaps} rel="noreferrer">See Address</a>
            </p>
          </article>
        </section>
      </article>
      }
    </Layout>
  );
};

export default CountryPage;
