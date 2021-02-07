// #491 - Easy

// This problem was asked by Palantir.

// Write a program that checks whether an integer is a palindrome.
// For example, 121 is a palindrome, as well as 888. 678 is not a palindrome.
// Do not convert the integer into a string.

const isPalindrome = (num) => {
  let digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }
  // console.log(digits);
  for (let i = 0; i < Math.floor(digits.length / 2); i++) {
    if (digits[i] !== digits[digits.length - i - 1]) return false;
  }
  return true;
};

console.log(isPalindrome(1234));
console.log(isPalindrome(0));
console.log(isPalindrome(1234321));
console.log(isPalindrome(888));
console.log(isPalindrome(678));
