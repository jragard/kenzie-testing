# Katas 4 Tests

## To Run These Tests

1: Go to the test suite repo (here) and clone it to your machine.

2: cd into the cloned directory and run `npm install` from the command line.

3: Run `node run.js ___student's_repo_url___`.  Upon execution the output of the test results will be written to your console.

If you would like to test it on a dummy submission link, use `node run.js https://github.com/jragard/katas4test`

# Katas 4 Instructions

Overview

A [kata](https://en.wikipedia.org/wiki/Kata_(programming)) is an individual exercise where you practice a programming skill through repetition. Today you will practice using JavaScript loops, conditionals, expressions and arrays through a series of katas.

Several of the katas will use the following sample variables, which you can copy and paste into your code:

`const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";`

`const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];`

`const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"`


### Part 1: Katas
1.  Write a function that returns an array with the cities in 'gotCitiesCSV'

2.  Write a function that returns an array of words from the sentence in 'bestThing'
3.  Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'
4.  Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'  
5.  Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'
6.  Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'
7.  Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'
8.  Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returnss the new modified 'lotrCitiesArray'
9.  Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray' 
10.  Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the new modified 'lotrCitiesArray' 
11.  Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the new modified 'lotrCitiesArray'
12.  Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing' 
13.  Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing' 
14.  Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even')
15.  Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'
16.  Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'
17.  Write a function that finds and returns the index of 'only' in 'bestThing'
18.  Write a function that finds and returns the index of the last word in 'bestThing'
19.  Write a function that finds and returns an array of all cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.)
20.  Write a function that finds and returns an array with all cities from 'lotrCitiesArray' that end with 'or'
21.  Write a function that finds and returns an array with all the words in 'bestThing' that start with a 'b'.
22.  Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Mirkwood'
23.  Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Hollywood'
24.  Write a function that returns the index of 'Mirkwood' in 'lotrCitiesArray'
25.  Write a function that finds and returns the first city in 'lotrCitiesArray' that has more than one word.
26.  Write a function that reverses the order of 'lotrCitiesArray' and returns the new array
27.  Write a function that sorts 'lotrCitiesArray' alphabetically and returns the new array
28.  Write a function that sorts 'lotrCitiesArray' by the number of characters in each city (i.e., shortest city names go first) and return the new array
29.  Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the new array
30.  Write a function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #29 to the back of the array and returns the new array
31.  Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the new array
32.  Write a function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #31 to the front of the array and returns the new array


### Part 2: Display results on a webpage

You will create a single web page to display the results of calling the functions you have written, with a labeled heading for each individual exercise followed by your solution.  Write a helper function and utilize **document.createElement** and associated methods to achieve this.

Hint: when displaying an array, use JSON.stringify(...) to 'prettify' the output. For example, lets say you use document.createElement and store it into a variable called newElement. To display lotrCitiesArray on this element, you can call: 

`newElement.textContent = JSON.stringify(lotrCitiesArray);`