// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// 1st solution:

function squareSum(numbers){
  let sum = 0;
  
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i]
}
 return sum;
}

// 2nd solution:

function squareSum(numbers){
  return numbers.map(x => x * x).reduce((prev, curr) => prev + curr, 0)
}