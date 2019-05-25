const MochaTest = require('./../../MochaTest');


module.exports.run = async (args) =>{
    const mochaTest = new MochaTest(this.help, args);
    await mochaTest.runTest();
};

module.exports.help ={
    name: "katas5",
    aliases: ['ktas5'],
    mochaTestFile: 'katas5',
    mochaFunctions: ["reverseString", "testReverseString1", "testReverseString2", 
                     "reverseSentence", "testReverseSentence1", "testReverseSentence2", 
                     "minimumValue", "testMinimumValue1", "testMinimumValue2", 
                     "maximumValue", "testMaximumValue1", "testMaximumValue2", 
                     "calculateRemainder", "testCalculateRemainder1", "testCalculateRemainder2", 
                     "distinctValues", "testDistinctValues1", "testDistinctValues2", 
                     "countValues", "testCountValues1", "testCountValues2", 
                     "evaluateExpression", "testEvaluateExpression1", "testEvaluateExpression2"
                    ]
};