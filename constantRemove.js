// const constantRemove = "B,C,D,F,G,H,J,K,K,M,N,P,Q,R,S,T,V,W,X,Y,Z"
// function removeVowels(str) {
// }

const alphabet = "HELLsdufsdO";
let removeString = "";
let constantRemove = "B,C,D,F,G,H,J,K,K,M,N,P,Q,R,S,T,V,W,X,Y,Z";
for (i = 0; i < alphabet.length - 1; i++) {
  let currentValue = alphabet[i];
  if (!constantRemove.includes(currentValue)) {
    removeString += currentValue;
  }
}

console.log(removeString);
