function decimalNumber(num) {
  let binary = "";
  for (; num != 0; ) {
    binary = (num % 2) + binary;
    num = (num - (num % 2)) / 2;
  }
  return binary || "0";
}
console.log(decimalNumber(394));
