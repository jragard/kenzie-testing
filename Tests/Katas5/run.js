const fs = require('fs');
const axios = require('axios');
const { exec, spawn } = require('child_process');
const { argv } = require('yargs');


const tempFile = "test/s.js";
const tempFileStream = fs.createWriteStream(tempFile);
    
if (argv._.length === 0) {
    defaultTest();
} else if (argv._[0].includes("github")) {
    const answer = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(argv._[0]);
    const url = `https://raw.githubusercontent.com/${answer[1]}/${
    answer[2]
    }/master/katas5.js`;
    gitTest(url);
} else if (argv._[0].includes("gitlab")) {
    const url = argv._[0] + "/raw/master/katas5.js";
    gitTest(url);
} else {
    console.log(`invalid command line parameter: ${argv._[0]}`);
}
    
function defaultTest() {
    studentCode = fs.readFileSync("../../temp.js", { encoding: "utf8" });
    runTests(studentCode);
}
    
function gitTest(url) {
    axios.get(url).then(response => {
    runTests(response.data);
    });
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
    spawn("mocha", ['--colors'], { stdio: "inherit" }).on("exit", function(error) {
    if (error) {
        console.log(error);
    }
    exec(`rm ${tempFile}`);
    });
};