function isPrime(num) {
  
  if (num <= 1) {
    return false;
  }
  
  // Check for factors from 2 to the square root of numnode
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // num is divisible by i, so it's not prime
    }
  }
  
  return true; // num is prime
}
console.log (isPrime(19));


