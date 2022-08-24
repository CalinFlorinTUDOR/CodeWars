// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// 1rst solution:

function abbrevName(name){
  const answer = [name[0]]
  for(let i = 0; i < name.length; i++) {
      if(name[i] === " ") {
          answer.push(name[i + 1]);
      }
  }
  return answer.map(el => el.toUpperCase()).join(".")
}

// 2nd solution:

let  abbrevName = function (string) {
  let names = string.split(' '),
      initials = names[0].substring(0, 1).toUpperCase() + ".";
  
  if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};