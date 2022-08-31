// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1
// nextBigger(num: 9)   // returns nil
// nextBigger(num: 111) // returns nil
// nextBigger(num: 531) // returns nil

function nextBigger(n){
  let arr = ('' + n).split('');
  for(let i = arr.length - 2; i >= 0; i--)
    if(arr[i]<arr[i + 1]) {
      for(var x = arr.length - 1; x > i + 1; x--)
        if(arr[x] > arr[i])
          break;
      [arr[i],arr[x]] = [arr[x], arr[i]];
      var final = arr.splice(i + 1);
      return +arr.concat(final.sort()).join('');
    }
  return -1;
}