const asciiText = "hello";
let adjustedResult = [];
let totalSum = 0;

for (let i = 1; i < asciiText.length; i++) {
  let adjustment = asciiText.charCodeAt(i) - asciiText.charCodeAt(i - 1);
  if (adjustment < 0) {
    adjustment = -adjustment;
  }
  adjustedResult.push(adjustment);
  totalSum += adjustment;
}

console.log(totalSum);
