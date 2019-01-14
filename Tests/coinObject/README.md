# Coin Object Tests

## To Run These Tests

1: Go to the test suite repo (here) and clone it to your machine.

2: cd into the cloned directory and run `npm install` from the command line.

3: Run `node run.js ___student's_repo_url___`.  Upon execution the output of the test results will be written to your console.

If you would like to test it on a dummy submission link, use `node run.js https://github.com/jragard/coinObject`

# Coin Object Instructions

Today you will practice what you've read about [objects in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) by creating a coin object. The coin object will represent whether a single coin is heads or tails. You will add several methods to it to support flipping the coin and displaying which side is currently facing up.

Start from the following code template, and fill in the incomplete or missing code indicated by the comments:

```
const coin = {
    state: 0,
    flip: function() {
        // 1. One point: Randomly set your coin object's "state" property to be either 
        //    0 or 1: use "this.state" to access the "state" property on this object.
    },
    toString: function() {
        // 2. One point: Return the string "Heads" or "Tails", depending on whether
        //    "this.state" is 0 or 1.
    },
    toHTML: function() {
        const image = document.createElement('img');
        // 3. One point: Set the properties of this image element to show either face-up
        //    or face-down, depending on whether this.state is 0 or 1.
        return image;
    }
};

function display20Flips() {
    // 4. One point: Use a loop to flip the coin 20 times, each time displaying the result of the flip as a string on the page.  After your loop completes, return an array with the result of each flip.


}

function display20Images() {
    // 5. One point: Use a loop to flip the coin 20 times, and display the results of each flip as an image on the page.  After your loop completes, return an array with result of each flip.


}
```

Note that you will need to download or create images to use to display face-up or face-down coins for the toHTML method. Create a folder directory named *images* in your repository to hold them.

Also note that, by convention, an object's toString() method should always return a string which represents the object. This return value can then be used in any debugging output you may need to do. This will be a helpful convention to follow going forward. However, a toString() method should not directly produce any visual output itself – that is, for example, it shouldn't itself perform a console.log(): it should only return the string.

Test and demonstrate that your coin object is complete doing the following:

- *One point:* Write a function called *display20Flips* that uses a loop to flip the coin 20 times.  Each time the coin flips, display the result of each flip as a string on the page (make use of your toString() method) and also push the result of the flip to an empty array.  After your loop completes, return the results array.

- *One point:* Write a function called *display20Images*, again using a loop to flip the coin 20 times...but this time instead of displaying the result as a string, display the result of each flip as an HTML IMG element on the page (make use of your toHTML() method).  Also push each result to an empty array and return the array after your loop completes.


