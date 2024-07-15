const numbers = [7, 2, 1, 9, 3];
const sort = () => {
  const n = numbers.length;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
};
sort();
console.log(numbers);
