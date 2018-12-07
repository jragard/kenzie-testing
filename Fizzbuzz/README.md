# TODO

- add more cases programmatically in the "string your function returns should contain the correct values"
- find a suitable answer to all questions in the _Lingering Questions_ section below

# Instructions

- Write a function named fizzbuzz
- Your function will have no parameters
- Your function should return a string with comma separated values with no spaces
- Your function should loop through 1 - 1000 (inclusive)
  - If a number is even, concatenate "Fizz," to the end of your string
  - If a number is a multiple of 3, concatenate "Buzz," to the end of your string
  - If a number is even and a multiple of 3 concatenate "FizzBuzz," to the end of your string
  - If a number is none of these things, concatenate the number itself and a "," to the end of your string
- Your function should return this string after 1000 iterations of the loop

# Lingering Questions

- Do we want to them to then attach the results of their function to the DOM? // This would most likely use a string method which has not been introduced yet
- How do we want to handle testing the bonus?
- The current instructions will lead students to having a trailing comma at the end of their string, should we ask them to remove it or simply factor it into our tests?
- Should we extend this so the parameter determines how many numbers into the sequence to go?
- We could give them the following hint:
  - The beginning of your string should resemble the following: "1,Fizz,Buzz,Fizz,5,FizzBuzz..."
