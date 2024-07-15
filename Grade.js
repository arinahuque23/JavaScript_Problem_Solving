// Problem: Write a function that takes a numerical grade (0-100) and returns the corresponding letter grade based on the following scale:

// 90-100: A
// 80-89: B

function calculateGrade(grade) {
  if (grade >= 90) {
    return "A+";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(calculateGrade(89));
