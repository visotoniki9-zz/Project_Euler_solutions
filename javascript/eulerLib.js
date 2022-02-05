export function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num) + 1; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}
export function primesUpTo(num) {
  const primes = [];
  for (let x = 0; x <= Math.sqrt(num); x += 1) {
    if (isPrime(x)) { primes.push(x); }
  }
  return primes;
}

export default { isPrime, primesUpTo };
