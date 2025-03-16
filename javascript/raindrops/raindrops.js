//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (num) => {
  let res = '';
  if (num%3===0) res += 'Pling';
  if (num%5===0) res += 'Plang';
  if (num%7===0) res += 'Plong';

  if (res==='') return res+num;

  return res;
};
