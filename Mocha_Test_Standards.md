If using Mocha and Chai to write tests, please follow these standards

* Requires

    **Require './../temp.js' at the top.  This file will be created by the command line script

    Ex: `const katas4 = require('./../temp/temp.js');`

    **Require chai**
    Ex: `const chai = require('../../node_modules/chai');`

    **Set your assertion variables with the Chai assertion library**
    Ex: `const expect = chai.expect;` or `const assert = chai.assert;`

    **Require colors.  This will make console output more readable by setting pending, failed, and passed test feedback to different colors.**
    Ex: `const colors = require('../../node_modules/mocha/lib/reporters/base').colors;`
        `colors['pending'] = '93';`
        `colors['green'] = '92';`

* Standards to follow

    If testing functions for specific return values:  For each `describe` statement, your first test should check to see if the function exists.  If `(typeof function) != 'function'`, we will skip the rest of the tests.  This allows students to run tests on assignments that are only partially completed, without seeing a bunch of ugly fail errors for work they haven't completed yet.

    Example: 
    ```
        it("should be a function", function() {
        if(typeof katas1.oneThroughTwenty != 'function') {
            this.skip();
        }
    });
    ```

    The way this works: each test directory includes its own run.js script.  The run.js will read the contents of the file the user is trying to test (whether it is a local file or a file in a git repo, depending on command line arguments run by the user), it will then create a temporary file and write the contents of the user's file to the temporary file.  Then, it injects a little bit of extra code at the bottom of the file underneath the student's code:  a `module.exports` object.  This is how the test file accesses the functions within the user file.

