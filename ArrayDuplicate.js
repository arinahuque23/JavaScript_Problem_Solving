const arr = [1, 2, 3, 3, 5, 6, 6];
const storeArray = [];
const duplicateIndex = [];
const firstIndex = [];
for (let i = 0; i <= arr.length - 1; i++) {
  const currentValue = arr[i];
  if (!storeArray.includes(arr[i])) {
    storeArray.push(currentValue);
  } else {
    duplicateIndex.push(i);
  }
}
console.log(storeArray);
console.log(duplicateIndex);
console.log(firstIndex);
