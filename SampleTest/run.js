/* This file takes the student's code as a github/gitlab url or pulls it from the
 * root directory of the project, writes it to a new file with any necessary imports
 * and exports, and then runs tests on the new file
 */

const fs = require("fs");
const axios = require("axios");
const { exec, spawn } = require("child_process");
const { argv } = require("yargs");

// tempFile is the file to which the code to be tested is written
const tempFile = "test/s.js";
const tempFileStream = fs.createWriteStream(tempFile);

if (argv._.length === 0) {
  defaultTest(); // this tests the local file
} else if (argv._[0].includes("github")) {
  const answer = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(argv._[0]);
  const url = `https://raw.githubusercontent.com/${answer[1]}/${
    answer[2]
  }/master/anagrams.js`;
  gitTest(url);
} else if (argv._[0].includes("gitlab")) {
  const url = argv._[0] + "/raw/master/anagrams.js";
  gitTest(url);
} else {
  console.log(`invalid command line parameter: ${argv._[0]}`);
}

function defaultTest() {
  // test the local solution file
  studentCode = fs.readFileSync("__studentSolutionFile.js__", {
    encoding: "utf8"
  }); // read the student's local solution file
  runTests(studentCode);
}

function gitTest(url) {
  axios.get(url).then(response => {
    runTests(response.data);
  });
}

function runTests(studentCode) {
  // write student's code to the tempFileStream
  // sample import
  tempFileStream.write("const { words } = require('./words');\n");
  // replace any 'use strict' from student's code with empty string
  tempFileStream.write(studentCode.replace(/['"]?use strict['"]?/, ""));
  // sample export, exporting contents of 'getSetsOfFiveAnagrams' function or false if function is not implemented
  tempFileStream.write(
    "\nmodule.exports = { getSetsOfFiveAnagrams: (typeof getSetsOfFiveAnagrams) === 'function' && getSetsOfFiveAnagrams };"
  );
  // calls mocha from command line
  spawn("mocha", [], { stdio: "inherit" }).on("exit", function(error) {
    if (error) {
      console.log(error);
    }

    // removes tempFile
    exec(`rm ${tempFile}`);
  });
}
