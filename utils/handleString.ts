export const readableNumber = (num:number) => {
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

export const objToString = (obj:ObjParams) => {
  if (!obj) return '';

  const langs:string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    langs.push(value);
  }

  return langs.join(', ');
};
