// prints the multiplication table for the number 8 using if-else statements:

const number = 8;

for (let i = 1; i <= 10; i++) {
  let result;
  if (i === 1) {
    result = number * 1;
  } else if (i === 2) {
    result = number * 2;
  } else if (i === 3) {
    result = number * 3;
  } else if (i === 4) {
    result = number * 4;
  } else if (i === 5) {
    result = number * 5;
  } else if (i === 6) {
    result = number * 6;
  } else if (i === 7) {
    result = number * 7;
  } else if (i === 8) {
    result = number * 8;
  } else if (i === 9) {
    result = number * 9;
  } else if (i === 10) {
    result = number * 10;
  }
  console.log(`${number} x ${i} = ${result}`);
}
