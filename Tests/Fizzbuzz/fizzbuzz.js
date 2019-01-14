/************************************************************
 *                  FizzBuzz                                 *
 *  If a number is even, write Fizz.                         *
 *  If a number is a multiple of 3, write Buzz.              *
 *  If a number is even and a multiple of 3, write FizzBuzz  *
 *  Otherwise, write the number.                             *
 ************************************************************/

function fizzbuzz(maxValue) {
  let result = "";
  for (let i = 1; i <= maxValue; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      result += "FizzBuzz,";
    } else if (i % 2 === 0) {
      result += "Fizz,";
    } else if (i % 3 === 0) {
      result += "Buzz,";
    } else {
      result += i + ",";
    }
  }
  // console.log(result);
  return result;
}
fizzbuzzPrime(1000);

function writeToDOM(fizzbuzzResult) {
  /* Write the result from the fizzbuzz function to the DOM. */
}

function fizzbuzzPrime(maxValue) {
  let result = "";
  for (let i = 1; i <= maxValue; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      result += "FizzBuzz,";
    } else if (i % 2 === 0) {
      result += "Fizz,";
    } else if (i % 3 === 0) {
      result += "Buzz,";
    } else if (checkForPrime(i)) {
      result += "Prime,";
    } else {
      result += i + ",";
    }
  }
  return result;
}

function checkForPrime(number) {
  if (number === 1) return false;
  for (i = 2; i < Math.ceil(number / 2); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports = {
  fizzbuzz,
  fizzbuzzPrime
};
