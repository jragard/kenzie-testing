const TestCafeTest = require('./../../TestCafeTest');

module.exports.run = async (args) => {
    const testCafeTest = new TestCafeTest(this.help, args);
    await testCafeTest.runTest();
};

module.exports.help = {
    name: 'anagrams1',
    aliases: ['anagram1'],
    testCafeFile: 'anagrams1',
    testCafeFixture: "Testing Anagrams 1"
};
