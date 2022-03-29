import {Currencies} from '@/interfaces/all-countries';

const readableNumber = (num:number):string => {
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

// return obj as string only value separate by ,
type ObjParams = { [key: string]: string } | undefined;
const objToString = (obj:ObjParams):string => {
  if (!obj) return '';

  const langs:string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    langs.push(value);
  }

  return langs.join(', ');
};

const getCurrencies = (obj:any | undefined) => {
  if (!obj) return;

  // get first property of object for using as key
  const property:string = Object.keys(obj)[0];

  return obj[property].name;
};

const makeSlug = (text:string):string => {
  return text
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
};
export default {
  readableNumber,
  objToString,
  getCurrencies,
  makeSlug,
};
