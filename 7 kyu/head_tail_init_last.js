// Haskell has some useful functions for dealing with lists:
// head [1,2,3,4,5]
// 1
// λ tail [1,2,3,4,5]
// [2,3,4,5]
// λ init [1,2,3,4,5]
// [1,2,3,4]
// λ last [1,2,3,4,5]
// 5
// Here's how I expect the functions to be called in your language:

// head([1,2,3,4,5]); => 1
// tail([1,2,3,4,5]); => [2,3,4,5]

const head = x => x[0];
const tail = x => x.slice(1);
const init = x => x.slice(0, x.length - 1);
const last = x => x[x.length - 1];