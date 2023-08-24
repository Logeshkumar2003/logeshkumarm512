const words = ["level", "hello", "racecar", "world"];

const isPalindrome = word => {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
};

const palindromes = words.filter(isPalindrome);
console.log(palindromes);