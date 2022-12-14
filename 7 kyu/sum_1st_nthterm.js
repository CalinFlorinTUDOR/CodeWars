// Your task is to write a function which returns the sum of following series upto nth term(parameter).

// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

function SeriesSum(n) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += (1 / (i * 3 + 1))
  }
  return sum.toFixed(2)
}

// Hint to resolving this....
// i = 0 * 3 + 1 => 1
// i = 1 * 3 + 1 => 4
// i = 2 * 3 + 1 => 7
// i = 3 * 3 + 1 => 10