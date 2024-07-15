const reverseString = (str) => {
  let reverseStg = "";

  if (str.length === 4) {
    reverseStg += str[3] + str[2] + str[1] + str[0];
  } else if (str.length === 3) {
    reverseStg += str[2] + str[1] + str[0];
  } else if (str.length === 2) {
    reverseStg += str[1] + str[0];
  } else if (str.length === 1) {
    reverseStg += str[0];
  } else {
    reverseStg += "";
  }

  return reverseStg;
};

const originalString1 = "rafa";
const originalString2 = "adil";
const originalString3 = "ayan";

const reversedString1 = reverseString(originalString1);
const reversedString2 = reverseString(originalString2);
const reversedString3 = reverseString(originalString3);
console.log(reversedString1);
console.log(reversedString2);
console.log(reversedString3);
