# Assessment: JavaScript Katas 4 #

### Overview ###

A [kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an individual exercise where you practice a programming skill through repetition. Today you will practice using JavaScript loops, conditionals, expressions and arrays through a series of katas.
Today you will practice using Javascript loops, conditionals, expressions, and arrays through a series of katas.

You will create a single web page to display the output from each of your functions, with a labeled heading for each individual exercise 
followed by your solution. **All outputs for the individual katas need to be displayed using `document.createElement()` and associated 
methods.** After appending the output of your function to the page, each function should use the 'return' statement to return its output.

Hint: when displaying an array, use `JSON.stringify()` to 'prettify' the output. For example, lets say you use `document.createElement()` 
and store it into a variable called `newElement`.  To display _`lotrCitiesArray`_ on this element, you can call:

`newElement.textContent = JSON.stringify(lotrCitiesArray);`

**Example**

```
    function kata1() {
        let newElement = document.createElement();
        newElement.textContent = JSON.stringify(lotrCitiesArray);
        document.body.appendChild(newElement)

        return lotrCitiesArray; // Don't forget to return your output!
    }
```
It might be beneficial to write a helper function to call within each kata, which could be responsible for taking care of creating new 
elements, appending text/content to the new elements, and then appending the new elements to the page.  However, this is not required.

Several of the katas will use the following sample variables, which you can copy and paste into your code:

```js
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
```

```js
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];
```

```js
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
```
**Testing**

For this assessment, you will have access to testing tools as you work.  If you would like to test your work as you go, follow these instructions:

1. Make sure to name your file `katas4.js`.  Also, name each function `kata1()`, `kata2()`, and so on.  If you do not follow these instructions, the testing tools will not work.
2. From your command line shell, run 
`npm install --global git+https://github.com/jragard/kenzie-testing`
This will install the testing npm package.
3. While in the same directory as your `katas4.js` file, run the terminal command `kenzie-test katas4`.  You will receive instant feedback in your terminal.


### Part 1: Katas
1.  Write a function that returns an array with the cities in 'gotCitiesCSV'.  Remember to also append the results to the page.
2.  Write a function that returns an array of words from the sentence in 'bestThing'. Remember to also append the results to the page.
3.  Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'. Remember to also append the results to the page.
4.  Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'. Remember to also append the results to the page.
5.  Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'. Remember to also append the results to the page.
6.  Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'. Remember to also append the results to the page.
7.  Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'. Remember to also append the results to the page.
8.  Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
9.  Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
10.  Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
11.  Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'. Remember to also append the results to the page.
12.  Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing'. Remember to also append the results to the page.
13.  Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing'. Remember to also append the results to the page.
14.  Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even'). Remember to also append the results to the page.
15.  Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'. Remember to also append the results to the page.
16.  Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'. Remember to also append the results to the page.
17.  Write a function that finds and returns the index of 'only' in 'bestThing'. Remember to also append the results to the page.
18.  Write a function that finds and returns the index of the last word in 'bestThing'. Remember to also append the results to the page.
19.  Write a function that finds and returns an array of all cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.). Remember to also append the results to the page.
20.  Write a function that finds and returns an array with all cities from 'lotrCitiesArray' that end with 'or'. Remember to also append the results to the page.
21.  Write a function that finds and returns an array with all the words in 'bestThing' that start with a 'b'. Remember to also append the results to the page.
22.  Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Mirkwood'. Remember to also append the results to the page.
23.  Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Hollywood'. Remember to also append the results to the page.
24.  Write a function that returns the index of 'Mirkwood' in 'lotrCitiesArray'. Remember to also append the results to the page.
25.  Write a function that finds and returns the first city in 'lotrCitiesArray' that has more than one word. Remember to also append the results to the page.
26.  Write a function that reverses the order of 'lotrCitiesArray' and returns the new array. Remember to also append the results to the page.
27.  Write a function that sorts 'lotrCitiesArray' alphabetically and returns the new array. Remember to also append the results to the page.
28.  Write a function that sorts 'lotrCitiesArray' by the number of characters in each city (i.e., shortest city names go first) and return the new array. Remember to also append the results to the page.
29.  Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the new array. Remember to also append the results to the page.
30.  Write a function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #29 to the back of the array and returns the new array. Remember to also append the results to the page.
31.  Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the new array. Remember to also append the results to the page.
32.  Write a function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #31 to the front of the array and returns the new array. Remember to also append the results to the page.