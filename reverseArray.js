const originalArray = [2, 34, 4, 6, 8, 89];
const reverseArray = (arr) => {
  const reversedArr = [];

  if (arr.length === 0) {
    console.log("Empty array");
  } else if (arr.length === 1) {
    reversedArr.push(arr[0]);
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
  }

  return reversedArr;
};

const reversedArray = reverseArray(originalArray);
console.log(reversedArray);
