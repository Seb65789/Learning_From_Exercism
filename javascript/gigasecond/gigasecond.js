//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {

  let sec = date.getTime()/1000; // number of miliseconds since 1970 // number of seconds since 1970
  sec += 1_000_000_000;
  return new Date(sec*1000);
};
