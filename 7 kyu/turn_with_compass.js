// You have an 8-wind compass...You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

// Return the direction you will face after the turn.

// Examples
// "S",  180  -->  "N"
// "SE", -45  -->  "E"
// "W",  495  -->  "NE"

// 1st solution:

function direction(facing, turn){
  let arr = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W','NW',
            'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW',
            'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW',]
  
  let step = turn / 45;
  if (step > 0) {
    let arrSigns = arr.indexOf(facing) + step % 8
    return arr[arrSigns];
  } else {
    let arrSigns = arr.reverse().indexOf(facing) - step % 8
    return arr[arrSigns];
  }
  
}


// 2nd solution:

function direction(facing, turn) {
  let arr = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W','NW']
  let step = turn / 45;
  let startSpin = arr.indexOf(facing)
  let shift = (startSpin + step) % 8
  let result = shift >= 0 ? arr[shift] : arr[shift + arr.length] 
  return result;
}