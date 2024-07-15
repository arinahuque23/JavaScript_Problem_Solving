// Problem: Write a function that checks if a given number is even or odd.
function evenOdd(number){
           if (number % 2 === 0){
            return "even"
           }
           else {
            return "odd"
           }
}
console.log(evenOdd(5));
console.log(evenOdd(4));