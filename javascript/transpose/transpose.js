//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.

import { table } from "console";

//
export const maxlength = (list) => {
  let max = 0;
  for (let i = 0; i < list.length; i++){
    max = list[i].length > max ? list[i].length : max;
  }
  return max;
}

export const findmax = (element,length) => {
  return element.length === length;
}

export const transpose = (text) => {
  let lines_t = [];

  // get the max length 
  let maxlines = maxlength(text);


  for (let i = 0; i < maxlines; i++){ // the number of lines
    let line = '';
    for(let j = 0; j < text.length; j++){

      // If the length of the lines are not matching and their are empty spaces
      if(text[j][i] !== undefined) line += text[j][i];

      // If the index is out of range for i then do nothing
      // If the character doesn't exist, add a space if necessary
      else if (text.slice(j + 1).some(row => row[i] !== undefined)) {
        line += ' ';
      }
      
    }
    lines_t.push(line);
  }

  return lines_t;
};


