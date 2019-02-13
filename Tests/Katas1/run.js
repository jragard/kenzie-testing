const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch');
const { exec, spawn } = require('child_process');
const { argv } = require('yargs');

const tempFile = "test/s.js";
const tempFileStream = fs.createWriteStream(tempFile);

const args = argv._[0]

if (args == null) {
  defaultTest();
} else if (String(args).includes("github")) {
  let fileToTest;
  let url;
  const argVars = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
  const gitUser = argVars[1];
  const gitRepo = argVars[2];

  const gitFetchUrl = `https://api.github.com/repos/${gitUser}/${gitRepo}/contents`;

  axios.get(gitFetchUrl).then(response => {
    fileToTest = response.data[0].name;
    url = `https://raw.githubusercontent.com/${gitUser}/${gitRepo}/master/${fileToTest}`;
    gitTest(url);
  });

} else {
  const url = "https://gitlab.com/api/v4/projects/" + arg[0] + "/repository/files/katas1%2Ejs?ref=master";
  gitTest(url);
}

function defaultTest() {
  studentCode = fs.readFileSync("./test/temp.js", { encoding: "utf8" });
  runTests(studentCode);
}

function gitTest(url) {
  if(url.includes("github")) {
  axios.get(url).then(response => {
    runTests(response.data);
  });
} else {
  fetch(url, {
    method: 'GET',
    headers: {
      'PRIVATE-TOKEN': '5ZHEYQdoa5Tgx3yjpdP3'
    }
  })
  .then(function(response) {
    let res = response.body._readableState.buffer.head.data
    let regex = /"content"/
    let index = res.toString().search(regex)
    let content = res.toString().slice(index + 11)
    let decodedContent = Buffer.from(content, 'base64').toString();
    runTests(decodedContent)
  })
}
}

function runTests(studentCode) {
  tempFileStream.write(studentCode.replace(/['"]?use strict['"]?/, ""));
  tempFileStream.write(
    "\nmodule.exports = { oneThroughTwenty: (typeof oneThroughTwenty) === 'function' && oneThroughTwenty, evensToTwenty: (typeof evensToTwenty) === 'function' && evensToTwenty, oddsToTwenty: (typeof oddsToTwenty) === 'function' && oddsToTwenty, multiplesOfFive: (typeof multiplesOfFive) === 'function' && multiplesOfFive, squareNumbers: (typeof squareNumbers) === 'function' && squareNumbers, countingBackwards: (typeof countingBackwards) === 'function' && countingBackwards, evenNumbersBackwards: (typeof evenNumbersBackwards) === 'function' && evenNumbersBackwards, oddNumbersBackwards: (typeof oddNumbersBackwards) === 'function' && oddNumbersBackwards, multiplesOfFiveBackwards: (typeof multiplesOfFiveBackwards) === 'function' && multiplesOfFiveBackwards, squareNumbersBackwards: (typeof squareNumbersBackwards) === 'function' && squareNumbersBackwards, }"
  );
  spawn("./node_modules/.bin/mocha", ['--colors'], { stdio: "inherit" }).on("exit", function(error) {
    if (error) {
      console.log(error);
    }
    exec(`rm ${tempFile}`);
    exec(`rm ./test/temp.js`);
  });
}