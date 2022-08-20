// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  const arr = s.split(' ');
  let minLength;
  for (let word of arr) {
    minLength == null ? minLength = word.length : minLength
    if (word.length < minLength) {
      minLength = word.length
    }
  }
  return minLength
}