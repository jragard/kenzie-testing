const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch');
const { exec, spawn } = require('child_process');
const { argv } = require('yargs');


const tempFile = "test/s.js";
const tempFileStream = fs.createWriteStream(tempFile);

const arg = argv._
    
if (argv._.length === 0) {
    defaultTest();
} else if (String(arg[0]).includes("github")) {
    const answer = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(argv._[0]);
    const url = `https://raw.githubusercontent.com/${answer[1]}/${
    answer[2]
    }/master/katas5.js`;
    gitTest(url);
} else {
    const url = "https://gitlab.com/api/v4/projects/" + argv._[0] + "/repository/files/katas5%2Ejs?ref=master";
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

    "\nmodule.exports = { reverseString: (typeof reverseString) === 'function' && reverseString, \
                          testReverseString1: (typeof testReverseString1) === 'function' && testReverseString1, \
                          testReverseString2: (typeof testReverseString2) === 'function' && testReverseString2, \
                          reverseSentence: (typeof reverseSentence) === 'function' && reverseSentence, \
                          testReverseSentence1: (typeof testReverseSentence1) === 'function' && testReverseSentence1, \
                          testReverseSentence2: (typeof testReverseSentence2) === 'function' && testReverseSentence2, \
                          minimumValue: (typeof minimumValue) === 'function' && minimumValue, \
                          testMinimumValue1: (typeof testMinimumValue1) === 'function' && testMinimumValue1, \
                          testMinimumValue2: (typeof testMinimumValue2) === 'function' && testMinimumValue2, \
                          maximumValue: (typeof maximumValue) === 'function' && maximumValue, \
                          testMaximumValue1: (typeof testMaximumValue1) === 'function' && testMaximumValue1, \
                          testMaximumValue2: (typeof testMaximumValue2) === 'function' && testMaximumValue2, \
                          calculateRemainder: (typeof calculateRemainder) === 'function' && calculateRemainder, \
                          testCalculateRemainder1: (typeof testCalculateRemainder1) === 'function' && testCalculateRemainder1, \
                          testCalculateRemainder2: (typeof testCalculateRemainder2) === 'function' && testCalculateRemainder2, \
                          distinctValues: (typeof distinctValues) === 'function' && distinctValues, \
                          testDistinctValues1: (typeof testDistinctValues1) === 'function' && testDistinctValues1, \
                          testDistinctValues2: (typeof testDistinctValues1) === 'function' && testDistinctValues1, \
                          countValues: (typeof countValues) === 'function' && countValues, \
                          testCountValues1: (typeof testCountValues1) === 'function' && testCountValues1, \
                          testCountValues2: (typeof testCountValues2) === 'function' && testCountValues2, \
                          evaluateExpression: (typeof evaluateExpression) === 'function' && evaluateExpression, \
                          testEvaluateExpression1: (typeof testEvaluateExpression1) === 'function' && testEvaluateExpression1, \
                          testEvaluateExpression2: (typeof testEvaluateExpression2) === 'function' && testEvaluateExpression2 }"
    );
    spawn("./node_modules/.bin/mocha", ['--colors'], { stdio: "inherit" }).on("exit", function(error) {
    if (error) {
        console.log(error);
    }
    exec(`rm ${tempFile}`);
    exec(`rm ./test/temp.js`)
    });
};