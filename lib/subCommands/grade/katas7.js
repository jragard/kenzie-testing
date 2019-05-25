const MochaTest = require('./../../MochaTest');


module.exports.run = async (args) =>{
    const mochaTest = new MochaTest(this.help, args);
    await mochaTest.runTest();
};

module.exports.help ={
    name: "katas7",
    aliases: ['ktas7'],
    mochaTestFile: 'katas7',
    mochaFunctions: ["newForEach", "newMap", "newSome", "newFind", "newFindIndex", "newEvery", "newFilter"]
};