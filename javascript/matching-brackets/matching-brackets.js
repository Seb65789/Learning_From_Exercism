//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const rmchar = (string) => {
  string = string.split(''); // String with characters 

  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case '[':
      case ']':
      case '(':
      case ')':
      case '{':
      case '}':
        continue;
      default:
        string[i] = '';
    }
  }

  return string.join(''); // The string only contains brackets
}

export const isPaired = (s) => {
  let stack = [];

  // Let's create an object for the paires
  const paires = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  };


  // removing all the other characters
  let string = rmchar(s);
  
  for(let char of string){
    if (paires[char]){ // Controls if char === '(', '[' ,'{'
      stack.push(char);  // Add it to the stack 
    }
    else if (Object.values(paires).includes(char)){ // Object values returns the values of the keys of the object
                                                    // Allows to verify if char === ')' ']' '}'
      if(stack.length === 0 || paires[stack.pop()] !== char){// if Empty then it is not paired or if the 
                                      //  last element of stack is different from the last opened bracket 
        return false;
      }
    }
  }
  return stack.length === 0; // If the stack is not empty then false.  
};

