// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  
  let result = [];

  let splitWords = str.split(' ');
  
  for (let i = 0; i < splitWords.length; i++) {
    result.push(splitWords[i].split('').reverse().join(''))
    
  }
  result = result.join(' ')
  return result
}