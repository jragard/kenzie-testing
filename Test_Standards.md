* Requires

    **Require './tempFileToTest.js' at the top.  This file will be created by the command line script `run.js`, which is explained in more detail below.**

    Ex: `const katas4 = require('./tempFileToTest.js');`

    **Require chai**
    Ex: `const chai = require('../../../node_modules/chai');`

    **Set your assertion variables with the Chai assertion library**
    Ex: `const expect = chai.expect;` or `const assert = chai.assert;`

    **Require colors.  This will make console output more readable by setting pending, failed, and passed test feedback to different colors.**
    Ex: `const colors = require('../../../node_modules/mocha/lib/reporters/base').colors;`
        `colors['pending'] = '93';`
        `colors['green'] = '92';`

* Standards to follow

    If testing functions for specific return values:  For each `describe` statement, your first test should check to see if the function exists.  If `(typeof function) != 'function'`, we will skip the rest of the tests.  This allows students to run tests on assignments that are only partially completed, without seeing a bunch of ugly fail errors for work they haven't completed yet.

    Ex: 
    ```
        it("should be a function", function() {
        if(typeof katas1.oneThroughTwenty != 'function') {
            this.skip();
        }
    });
    ```

    The way this works: each test directory includes its own run.js script.  The run.js will read the contents of the file the user is trying to test (whether it is a local file or a file in a git repo, depending on command line arguments run by the user), it will then create a temporary file and write the contents of the user's file to the temporary file.  Then, it injects a little bit of extra code at the bottom of the file underneath the student's code:  a `module.exports` object.  This is how the test file accesses the functions within the user file.

    Take Katas 4 for example.  I have re-written the instructions to have students write functions with *specific names*, like `kata1()`, `kata2()` and so on.  So, when it comes time for run.js to inject the `module.exports` object, (see line 137 in the run.js in the `Katas4` test directory), we COULD (and did, at first) write something like `module.exports = { kata1, kata2, kata3 }`, etc.  This way, in the test directory, after requiring `tempFileToTest.js` with `const katas4 = require('./tempFileToTest.js');`, we can test the functions by calling `katas4.kata1()`, `katas4.kata2()` and so on.  However, we will do one better.  We will use ternaries to check if the function is defined, and if so, export it.  If not, we just export `null`.  Then, in our test, when we check to see if `typeof katas4.kata1 === 'function'`, if the function was never defined in the user's code, our test will skip all subsequent tests for that function and output "Pending" in the console.  To do this, use the following syntax:

    `module.exports = { kata1: (typeof kata1) === 'function' && kata1, kata2: (typeof kata2) === 'function' && kata2 }` and so on.  What this is doing:  First, we set a key in the module.exports object named `kata1`.  Then, for its value, we are doing something similar to a ternary...basically, if `typeof kata1 === function` evaluates to `true`, we are setting the function `kata1` as the value of the key `kata`, which just exports the function normally so we can use it in our test file...if the statement evaulates to `false`, we just export the key of `kata1` with a value of `null`.  That way, the first test in each `describe` will catch it and skip the rest of the tests.

