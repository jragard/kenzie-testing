#!/usr/bin/env node

const fs = require('fs');
const readDirectory = fs.readdir;
const readFile = fs.readFileSync;
const changeDirectory = process.chdir;
const { exec } = require('child_process');
const ArgumentParser = require('argparse').ArgumentParser;
const path = require('path');

const parser = new ArgumentParser({
    version: '1.0.0',
    addHelp: true,
    description: 'Kenzie Academy assessment testing tool'
});

parser.addArgument(
    ['assessment'], {
        help: 'assessment to be tested'
    }
);

parser.addArgument(
    ['-g', '--gitlink'], {
        help: 'Github or Gitlab link to assessment file(s)'
    }
);

parser.addArgument(['-p', '--gitpage'], {
    help: 'Gitlab Pages link, or url to hosted webpage to test.'
    }
);

/*    
    This script takes either a github/gitlab url as a 2nd argument (Ex: kenzie-test katas1 -g https://github.com/jragard/katas1) 
    or, to test a local file, 1 argument (Ex: kenzie-test katas1).  Git url args must have a -g or --gitlink flag.

    On line 67, it begins by reading through the kenzie-testing/Tests directory. Then on line 75, for each test package
    in this directory, it checks to see if the given assessmentArg (case insensitive) matches the test package. Once import PropTypes from 'prop-types'
    finds a matching test package (for instance, Katas1), it sets 'validTestArgument' to 'true'.

    If the user has supplied a valid assessment name (line 64), 'testLocation' is set to 'Tests/<testPackage>'
    (Ex: 'Tests/Katas1'), and the script automatically navigates to that directory.

    Next, after switching to the appropriate ./Tests/ directory, it checks if the user is testing a local file, or if they
    are testing a file via github/gitlab url.  If testing a local file, line 77 will read through the user's local directory, 
    and for each of the local files in the users directory, we check if there is a valid local file to test.  (Valid local files must be named
    the same name as the test package directory, case insensitive (Ex: katas1 or Katas1). 

    If a valid local file exists, line 87 will set 'userLocalFile' = to the valid file.  The script will then find the full path to
    the valid file to be tested, reads the contents of the file and stores it in 'userLocalFileContent'.  It then creates a 'temp.js' file
    in the 'test' directory of the assessment in the npm package (Ex: Tests/Katas1/test), and writes 'userLocalFileContent' to the 'temp.js' file.
    Now we have a file identical the local file to be tested, in 'Tests/Katas1/test'.
    
    Now that we currently reside in the Tests/Katas1 directory, and we have a temp.js file identical to the local file the user is testing,
    the script will execute a terminal command 'node run.js'.  Each test package has its own run.js which further handles its testing. 

*/

const args = parser.parseArgs();
const assessmentArg = new RegExp(args.assessment, 'i');
const userLocalDir = process.cwd();
let testLocation = `${__dirname}/Tests`;

let localFileTest;
let userLocalFile;
let validTestArgument = false;


readDirectory(testLocation, (err, testPackages) => {

    if (err) {
       console.log('\n------------------------------------------------\n');
       console.log(`TEST PACKAGE ERROR!  kenzie-test package may be corrupted.  Please reinstall: "npm i -g git+https://github.com/jragard/kenzie-testing"`);
       console.log('\n------------------------------------------------\n')
    }

    testPackages.forEach((testPackage) => {

        if (assessmentArg.test(testPackage)) {
            validTestArgument = true;
            testLocation = `${testLocation}/${testPackage}`;
            changeDirectory(testLocation);

            if(args.gitlink === null) {

                localFileTest = true;

                readDirectory(userLocalDir, (err, localFiles) => {

                    if(err) {
                        console.log(err);
                    }

                    localFiles.forEach(file => {

                        let validLocalFileExists = assessmentArg.test(file);

                        if (validLocalFileExists) {
                            userLocalFile = file;
                            let pathToUserFile = path.join(userLocalDir, userLocalFile);

                            const userLocalFileContent = readFile(pathToUserFile, {
                                encoding: "utf8"
                            });

                            let tempFile = './test/temp.js';
                            fs.createWriteStream(tempFile).write(userLocalFileContent.replace(/['"]?use strict['"]?/, ""));
                        } 
                    });
                });
            }

            const {gitlink} = args;
            const {gitpage} = args;
            exec(`node run.js  ${gitlink ? '--gitlink ' + gitlink : ''} ${gitpage ? '--gitpage '+ gitpage : ''}`, (error, stdout, stderr) => {
                if(error){
                    console.log(error);
                }
                if(localFileTest === true) {
                    console.log(`Testing ${userLocalFile} in ${userLocalDir}:`)
                }
                console.log(stdout);
            })
        }
    });

    if(!validTestArgument) {
        console.log('Invalid assessment name.  Please review instructions and try again with valid assessment name');
    }
});


