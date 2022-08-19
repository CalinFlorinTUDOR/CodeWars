// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
  let arr = [];
  let lungime = ending.length;
  arr=str.split('');
  let final = "";
  for(let i=0; i<lungime; i++)
    {
      final+=arr[(arr.length - lungime) +i];
    }

    console.log(str);
    console.log(final);
  if(final == ending)
      {
        return true;
      }
     else
       {
         return false;
       }
  }