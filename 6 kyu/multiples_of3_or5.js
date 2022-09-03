// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// 1st solution

function solution(number) {
  
  let arr = [];
  
    if (number <= 1) 
    {
      return 0;
    } else {
      return arr = [...Array(number).keys()].filter(n=> n % 3 == 0 || n % 5 == 0).reduce((a,b) => a + b);
    }
  }

  // 2nd solution

  function solution(number) {
  
    if (number <= 1) return 0;
    else {
        let arr = [...Array(number).keys()];
    return arr.filter(n => n % 3 == 0 || n % 5 == 0).reduce((prev, curr) => prev + curr)
      }
  }