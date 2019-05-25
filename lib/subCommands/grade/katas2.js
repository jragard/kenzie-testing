const MochaTest = require('./../../MochaTest');


module.exports.run = async (args) =>{
    const mochaTest = new MochaTest(this.help, args);
    await mochaTest.runTest();
};

module.exports.help ={
    name: "katas2",
    aliases: ['ktas2'],
    mochaTestFile: 'katas2',
    mochaFunctions: ['add', 'multiply', 'power', 'factorial', 'fibonacci']
};
