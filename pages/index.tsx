import type {NextPage} from 'next';
import {useEffect, useState} from 'react';
import {Layout} from '../components/layout/Layout';
import s from './home.module.css';
import {Countries} from '../interfaces/all-countries';
import Image from 'next/image';
import {localdata} from '../localdata';

const readableNumber = (num:number) => {
  // turn number to array
  const numArray = Array.from(String(num));

  numArray.reverse();

  const formattedNumber = [];

  for (let i = 0; i < numArray.length; i ++) {
    if (i !== 0 && i % 3 === 0) {
      formattedNumber.push('.');
    }

    formattedNumber.push(numArray[i]);
  }

  return formattedNumber.reverse().join('');
};

type ObjParams = { [key: string]: string } | undefined;

const objToString = (obj:ObjParams) => {
  if (!obj) return '';

  const langs:string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    langs.push(value);
  }

  return langs.join(', ');
};

const Home: NextPage = () => {
  const [countries, setCountries] = useState<Countries[]>();

  const getAllCountries = () => {
    const data = localdata as Countries[];
    setCountries(data);
  };

  useEffect(() => {
    getAllCountries();
    console.log(countries);
  }, []);
  return (
    <Layout>
      <article className={s.root}>
        <section className='flex flex-wrap'>
          {countries && countries.map((item) => (
            <div className={s.block} key={item.cca3}>
              <div className={s.image_wrapper}>
                <Image
                  src={item.flags.png || ''}
                  objectFit="cover"
                  layout="fill"
                  alt={item.name.common}
                />
              </div>
              <div className='py-2 px-2 text-sm'>
                <h1 className='leading-4'>
                  <span className='font-bold mr-1 text-gray-400'>Name:</span> {item.name.common}<a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold ml-1 px-1 rounded">{item.region}</a>

                </h1>
                <h3>
                  <span className='font-bold mr-1 text-gray-400'>Population:</span>
                  <span>{readableNumber(item.population)}</span>
                </h3>
                <h4>
                  <span className='font-bold mr-1 text-gray-400'>Lang:</span>{objToString(item.languages)}
                </h4>
              </div>
              {/* <div>{item.timezones}</div> */}
            </div>
          ))
          };
        </section>
      </article>
    </Layout>
  );
};

export default Home;
