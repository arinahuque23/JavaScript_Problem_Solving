function sumOfSeries(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
// const total = 2;
// const totalSum = sumOfSeries(total);
// console.log(totalSum);
const total = sumOfSeries(6);
console.log(total);
