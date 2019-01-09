Overview
You will create a single web page, with a labelled heading for each individual kata followed by your solution.
For these katas, instead of using console.log() or document.write(), you are required to insert your results into the HTML using the document.createElement() and node.appendChild() methods.

For Each kata, you are required to write a function that returns an array of values. You will use the array of values you return after calling the function to append text to the HTML page
HINT: You can use a for-loop to iterate over your returned array and then use the document.createElement() and node.appendChild() methods on each value in the array.

Note that the first 10 katas should seem familiar: they are a repeat of the ones you did in Assessment: Javascript Katas 1. This time you will be declaring and calling functions, then inserting the results into your HTML page, rather than simply logging them to the console.

The values returned from each kata function MUST be generated dynamically; You cannot simply return an array of 'hard-coded' values

You should name each Kata function following this convention:

function kata1 () {
return "Hello";
}
function kata2 () {
return "World";
}

This means Your submission will have 23 individual 'kata' functions
You may also write any number of additional 'helper' functions to assist you with appending elements to the page

You may test your kata functions by navigating to your project directory in Terminal and typing in the following command:
`npm run test`

If you are having trouble appending values to the HTML page,
try revisiting the example file from Mini-Lesson: Inserting new Elements within a Page. You can copy and paste from the code embedded in the lesson.

**_ FUNCTIONS WITH IMPROPER NAMES WILL RECIEVE NO CREDIT _**
**_ YOUR FINAL SUBMISSION SHOULD CONTAIN NO `console.log()` STATEMENTS _**

Several of the katas will use the following sample array, which you can copy and paste into your code:

const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

Katas
1 Display the numbers from 1 to 20. (1, 2, 3, ...,19, 20)
2 Display the even numbers from 1 to 20. (2, 4, 6, ..., 18, 20)
3 Display the odd numbers from 1 to 20. (1, 3, 5, ..., 17, 19)
4 Display the multiples of 5 up to 100. (5, 10, 15, ..., 95, 100)
5 Display the square numbers up to 100. (1, 4, 9, ..., 81, 100)
6 Display the numbers counting backwards from 20 to 1. (20, 19, 18, ..., 2, 1)
7 Display the even numbers counting backwards from 20. (20, 18, 16, ..., 4, 2)
8 Display the odd numbers from 20 to 1, counting backwards. (19, 17, 15, ..., 3, 1)
9 Display the multiples of 5, counting down from 100. (100, 95, 90, ..., 10, 5)
10 Display the square numbers, counting down from 100. (100, 81, 64, ..., 4, 1)
11 Display the 20 elements of sampleArray. (469, 755, 244, ..., 940, 472)
12 Display all the even numbers contained in sampleArray. (244, 758, 450, ..., 940, 472)
13 Display all the odd numbers contained in sampleArray. (469, 755, 245, ..., 179, 535)
14 Display the square of each element in sampleArray. (219961, 570025, ..., 222784)
15 Display the sum of all the numbers from 1 to 20.
16 Display the sum of all the elements in sampleArray.
17 Display the smallest element in sampleArray.
18 Display the largest element in sampleArray.
19 Display 20 solid gray rectangles, each 20px high and 100px wide.
20 Display 20 solid gray rectangles, each 20px high, with widths ranging evenly from 105px to 200px (remember #4, above).
21 Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
22 As in #21, but alternate colors so that every other rectangle is red.
23 As in #21, but color the rectangles with even widths red.

Bonus
If you would like an additional challenge, try completing each of the above again without using any for or while loops.
(HINT: There are several Array Prototype Methods you can use to achieve this)
