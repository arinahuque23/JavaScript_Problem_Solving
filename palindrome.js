// Write a method that checks if a given string is a palindrome (reads the same backward as forward).

const checkPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  const isPalindrome = str === reversedStr;
  return `${str}, ${isPalindrome}`;
};

console.log(checkPalindrome("madam")); 
console.log(checkPalindrome("hello")); 
