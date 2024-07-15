// palindrome
const checkPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  const isPalindrome = str === reversedStr;
  return `${str}, ${isPalindrome}`;
};
console.log();
