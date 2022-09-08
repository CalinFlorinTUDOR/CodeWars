// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

// 1st solution

function nameShuffler(str) {
  
  let name = str.split(' ')
  name.reverse()
  let name2 = name.join(' ')
  return name2

}

// 2nd solution

function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}
