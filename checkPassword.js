// Write a method that checks the strength of a password based on its length.

const checkPasswordStrength = (password) => {
  if (password.length < 8) {
    return "Weak";
  } else if (password.length <= 10) {
    return "Moderate";
  } else {
    return "Strong";
  }
};

console.log(checkPasswordStrength("abc6dffddfdf5768"));
