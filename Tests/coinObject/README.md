# Coin Object

## To Run Tests as a Grader

1.  If you haven't already installed the kenzie-test npm package, from your terminal run `sudo npm install --global git+https://github.com/jragard/kenzie-testing`

2.  To test a completed assignment from a Gitlab Project ID submission, run `kenzie-test coinObject -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with KA_SE5 Gitlab account) For example, `kenzie-test coinObject -g 10771130` will grab the contents of the file at https://gitlab.com/jragard/katas4.

3. To test a completed assignment from a github link, run `kenzie-test coinObject -g https://github.com/jragard/coinObject` (or whatever the submitted github link happens to be)

4. To test a local file, the file and parent directory should be named according to assignment instructions (e.g. `coinObject.js` and `coinObject`).  Then run `kenzie-test coinObject` (or appropriate assignment name) while in the local `coinObject` directory.

## IMPORTANT TESTING BUG ##

Currently, when testing a file from a gitlab or github repo, the test won't run properly if the student doesn't name their file exactly `coinObject.js` (this is case sensitive).  We already have been instructing students to name files specifically for our tests to work, but I could see the case sensitive issue coming up if students, for instance, name their file `coinobject.js`.  This is something I plan to fix at some point, but it's good to be aware of.  This issue stems from lines 19 and 22 in the run.js for this test suite, and could come up in other situations if students don't name their files the way we ask.  (`Katas1.js` instead of `katas1.js` for instance)

# Assessment Instructions

Today you will practice what you've read about [objects in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) by creating a coin object. The coin object will represent whether a single coin is heads or tails. You will add several methods to it to support flipping the coin and displaying which side is currently facing up.

Create a directory called 'coinObject', and a JS file called coinObject.js.  **It is important to follow these naming instructions, or the testing/grading tools will not work and you may receive no points.**

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

**Your HTML file should have nothing in the body except for your script tag.  Instead of hard-coding HTML elements, create them dynamically with Javascript and append them to your HTML**

# Testing

1. If you already have node/npm installed, skip this step.  If not, open your terminal and run the command `brew install node`. Verify the install completed by running `node --version` (You should see something like `v8.12.0` or similar), then `npm --version` (You should see something like `6.4.1` or similar)

2. If you have already installed the kenzie-testing npm package, skip this step.  If not, in your terminal run the command `npm install --global git+https://github.com/jragard/kenzie-testing`

3. You can test the functions in your coinObject.js file by navigating to the coinObject directory that holds your file.  When you are in the same directory as your `coinObject.js` file, run the terminal command `kenzie-test coinObject`.  You will receive instant feedback in your terminal.  You can run these tests repeatedly as you work on the assessment to verify that your solutions are correct.

## For Graders

1. To test a completed assignment from a gitlab repo, run `kenzie-test coinObject -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with the KA_SE5 Gitlab account) For example, `kenzie-test coinObject -g 10771130` will grab the contents of the file at https://gitlab.com/jragard/coinObject.

2. To test a completed assignment from a github repo link, run `kenzie-test coinObject -g https://github.com/jragard/coinObject` (or whatever the submitted github repo link happens to be)



