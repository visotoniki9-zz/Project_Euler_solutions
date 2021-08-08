// If we list all the natural numbers below 10 that are multiples of
// 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

function compute() {
  const ans = [...Array(1000).keys()]
    .filter((num) => num % 3 === 0 || num % 5 === 0)
    .reduce((a, b) => a + b, 0);
  return ans;
}

console.log(compute());
