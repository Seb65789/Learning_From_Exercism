//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const findAnagrams = (word, list_words) => {
  let anagrams = new Set();

  word = word.toLowerCase(); // Convert to lower case
  const sortedWord = word.split('') // Split bby letters
                          .sort() // Sort the letters of the word
                          .join('') // Join the letters

  for (let i = 0; i < list_words.length; i++) {
    let word_i = list_words[i].toLowerCase();
    if (word_i.length !== word.length || word_i === word) continue;

    const sortedWord_i = word_i.split('').sort().join('') // Sort the letters of the current word

    if (sortedWord === sortedWord_i) {
      anagrams.add(list_words[i]);
    }
  }

  return anagrams; 
};
