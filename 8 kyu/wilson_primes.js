// Wilson primes satisfy the following condition. Let P represent a prime number.

// Then,

// ((P-1)! + 1) / (P * P)
// should give a whole number.

// Your task is to create a function that returns true if the given number is a Wilson prime.

function amIWilson(p) {
  p = BigInt(p)
  return ((factorial(p - 1n)) + 1n) % (p * p) == 0n
}

function factorial(x) {
  if (x <= 1n) {
    return 1n
  }
  return x * factorial(x - 1n)
}