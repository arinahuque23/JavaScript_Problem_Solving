// const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const doubleArray = [];

// function doubleAlphabet() {
//   for (i = 0; i < alphabet.length; i++) {
//     if (i % 2 i==0) {
//       doubleArray.push(alphabet[i]);
//     } else {
//       //     doubleArray.push([i]);
//       doubleArray.push(alphabet[i]);
//     }
//   }
// return doubleAlphabet()
// }

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const doubleArray = [];
function doubleAlphabet() {
  //   const doubleArray = [];
  for (i = 0; i < alphabet.length; i++) {
    if (i % 2) {
      doubleArray.push(alphabet[i] + alphabet[i]); //alphabet[index]+[index]= b+b =b
    } else {
      //     doubleArray.push([i]);
      doubleArray.push(alphabet[i]);
    }
  }
  //   return doubleArray;
}
doubleAlphabet();
console.log(doubleArray);
