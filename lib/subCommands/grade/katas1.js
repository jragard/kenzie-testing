//const { TestBase } = require("./../../../src/TestBase");
// let test = new TestBase(__dirname, {
//     mochaTest: ["katas1.js"],
//     mochaFunctions:
//         "oneThroughTwenty, evensToTwenty, oddsToTwenty, multiplesOfFive, squareNumbers, countingBackwards, evenNumbersBackwards, oddNumbersBackwards, multiplesOfFiveBackwards, squareNumbersBackwards"
// });
// await test.runMochaTest();
const MochaTest = require('./../../MochaTest');


module.exports.run = async (args) =>{
    const mochaTest = new MochaTest(this.help, args);
    await mochaTest.runTest();
    //TODO remove this console log
    console.log("Still working");
};

module.exports.help ={
    name: "katas1",
    aliases: ['ktas1'],
    mochaTestFile: 'katas1',
    mochaFunctions: ['oneThroughTwenty', 'evensToTwenty', 'oddsToTwenty', 'multiplesOfFive', 'squareNumbers', 'countingBackwards', 'evenNumbersBackwards', 'oddNumbersBackwards', 'multiplesOfFiveBackwards', 'squareNumbersBackwards']
};