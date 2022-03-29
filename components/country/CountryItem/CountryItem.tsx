import Image from 'next/image';
import Link from 'next/link';
import {FC} from 'react';
import s from './CountryItem.module.css';
import {showString} from '@/utils/index';
import {Countries} from '@/interfaces/all-countries';

interface Props {
  country: Countries
}

const CountryItem:FC<Props> = ({country}) => {
  return (
    <div className={s.block}>
      <Link href={`country/${showString.makeSlug(country.name.common)}`}>
        <div className={s.image_wrapper}>
          <Image
            src={country.flags.svg || '/images/no-image.svg'}
            objectFit="cover"
            layout="fill"
            alt={country.name.official}
          />
        </div>
      </Link>
      <div className='py-2 px-2 text-sm'>
        <h1 className='leading-4'>
          <span className={s.des_text}>Name:</span>
          {country.name.common}
          <a href="#"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold ml-1 px-1 rounded">
            {country.region}
          </a>
        </h1>
        <h3>
          <span className={s.des_text}>Population:</span>
          <span>{showString.readableNumber(country.population)}</span>
        </h3>
        <h4>
          <span className={s.des_text}>Lang:</span>{showString.objToString(country.languages)}
        </h4>
      </div>
    </div>
  );
};

export default CountryItem;
