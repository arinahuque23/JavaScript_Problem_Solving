// const sumOfAscii = ["rafa", "hello"];
const sumOfAscii = "hello";
let sum = 0;
for (i = 0; i < sumOfAscii.length; i++) {
  sum += sumOfAscii.charCodeAt(i);
}
console.log(sum);
