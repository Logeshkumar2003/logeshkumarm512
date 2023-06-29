const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
const primes = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  let isPrime = true;

  if (number === 1 || number === 0) {
    continue; 
  }

  for (let j = 2; j <= Math.sqrt(number); j++) {
    if (number % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primes.push(number);
  }
}

console.log(primes);
