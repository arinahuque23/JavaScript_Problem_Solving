// const cB = a;
const a = "abc";
const b = "xyz";
if (a !== b) {
  const temp = a;
  a = b;
  b = temp;
}
console.log("(" + b + ", " + a + ")");
