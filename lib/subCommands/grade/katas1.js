const MochaTest = require('./../../MochaTest');


module.exports.run = async (args) =>{
    const mochaTest = new MochaTest(this.help, args);
    await mochaTest.runTest();
};

module.exports.help ={
    name: "katas1",
    aliases: ['ktas1'],
    mochaTestFile: 'katas1',
    mochaFunctions: ['oneThroughTwenty', 'evensToTwenty', 'oddsToTwenty', 'multiplesOfFive', 'squareNumbers', 'countingBackwards', 'evenNumbersBackwards', 'oddNumbersBackwards', 'multiplesOfFiveBackwards', 'squareNumbersBackwards']
};