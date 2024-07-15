// Write a method that calculates the BMI (Body Mass Index) given weight in kilograms and height in meters and categorizes
function calculateBMI(weight, height) {
  let bmi = weight / (height * height);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    return "Overweight";
  } else {
    return "Obesity";
  }
}
let weight = 70;
let height = 1.75;

console.log("Your BMI category is: " + calculateBMI(weight, height));
