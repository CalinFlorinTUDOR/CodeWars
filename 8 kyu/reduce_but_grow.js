// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// 1st solution:

function grow(x){
  return  x.reduce((acc, current) => acc * current);
}

// 2nd solution:

function grow(x) {
  let result = 1;

  for(let i = o; i < x.length; i++) {
    result *= x[i];
  }
  return result;
}