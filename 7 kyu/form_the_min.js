// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates). Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// minValue ({1, 3, 1})  ==> return (13)
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

function minValue(values){
  const sortedArray = values.sort ();
  
  const setArray = new Set(sortedArray);
  
  return parseInt([...setArray].join(''));
}