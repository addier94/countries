import React, {FC} from 'react';

import Image from 'next/image';

import {Countries} from '@/interfaces/all-countries';
import {showString} from '@/utils/index';
import s from './CountryView.module.css';

const CountryView:FC<{country: Countries}> = ({country}) => {
  return (
    <article>
      <section className={s.imgwrapper}>
        <Image
          src={country?.flags.svg || '/images/no-image.svg'}
          objectFit="contain"
          width={320}
          height={220}
          blurDataURL='/images/loading.gif'
          placeholder='blur'
          alt={country.name.official}
        />
        <Image
          blurDataURL='/images/loading.gif'
          placeholder='blur'
          src={country?.coatOfArms.svg || '/images/no-image.svg'}
          objectFit="contain"
          width={320}
          height={220}
          alt={country.name.official}
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
            {showString.getCurrencies(country?.currencies)}
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
            {country.borders?.join(', ')}
          </p>
          <p><span className={s.subject}>Population: </span>
            {showString.readableNumber(country.population)}
          </p>
          <p><span className={s.subject}>Timezones: </span>
            {country.timezones.join(', ')}
          </p>
          <p><span className={s.subject}>PostalCode: </span>
            {country.postalCode?.format ? country.postalCode.format : '#####'}
          </p>
          <p><span className={s.subject}>Ubication: </span>
            <a className='text-blue-700 underline' target="_blank" href={country.maps.googleMaps} rel="noreferrer">Open Ubication</a>
          </p>
        </article>
      </section>
    </article>
  );
};

export default CountryView;
