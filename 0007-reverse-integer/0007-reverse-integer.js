/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
     const INT_MAX = 2 ** 31 - 1; // Define the maximum 32-bit integer value
  const INT_MIN = -(2 ** 31); // Define the minimum 32-bit integer value

  let reversed = 0;

  while (x !== 0) {
    const pop = x % 10; // Get the last digit of the number
    x = Math.trunc(x / 10); // Remove the last digit from the number

    // Check for integer overflow
    if (
      reversed > INT_MAX / 10 ||
      (reversed === INT_MAX / 10 && pop > 7)
    ) {
      return 0;
    }
    if (
      reversed < INT_MIN / 10 ||
      (reversed === INT_MIN / 10 && pop < -8)
    ) {
      return 0;
    }

    reversed = reversed * 10 + pop; // Add the digit to the reversed number
  }

  return reversed;
};