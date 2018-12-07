// If a number is even print Fizz if a number is a multiple of 3 print Buzz
// If a number is even and a multiple of 3 print FizzBuzz
// Otherwise, print the number

function fizzbuzz() {
  let result = "";
  for (let i = 1; i < 1001; i++) {
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
  //   console.log(result);
  return result;
}

fizzbuzz();

// TODO: implement after core assignment is fully tested
// function fizzbuzzPrime() {
//   let result = "";
//   for (let i = 1; i < 1001; i++) {
// TODO: implement logic for hangling prime here
//     if (i % 2 === 0 && i % 3 === 0) {
//       result += "FizzBuzz,";
//     } else if (i % 2 === 0) {
//       result += "Fizz,";
//     } else if (i % 3 === 0) {
//       result += "Buzz,";
//     } else {
//       result += i + ",";
//     }
//   }
//   console.log(result);
//   return result;
// }

module.exports = {
  fizzbuzz
};
