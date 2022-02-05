/* eslint-disable import/extensions */
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function smallestPrimeFactor(num) {
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) return i;
  }
  return num;
}

function compute() {
  let n = 600851475143;
  while (true) {
    const p = smallestPrimeFactor(n);
    if (p < n) {
      n /= p;
    } else return n;
  }
}

console.log(compute());
