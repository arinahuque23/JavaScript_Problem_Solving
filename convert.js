// (0°C × 9/5) + 32 = 32°F
// Convert Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => {
  let fahrenheit;

  if (typeof celsius !== "number") {
    return "Invalid input";
  } else if (celsius === 0) {
    fahrenheit = (celsius * 9) / 5 + 32;
  } else {
    fahrenheit = (celsius * 9) / 5 + 32;
  }

  return fahrenheit;
};

console.log(celsiusToFahrenheit(1));
console.log(celsiusToFahrenheit(10));
