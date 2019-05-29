const fs = require('fs');
const {exec} = require('child_process');
const {deleteTempFile, getFilePath, writeTempFile} = require('./utils/localFileHelper');

const tempFilePath = __dirname + '/../src/temp/';
const file = __dirname + '/../src/temp/temp.js';
const testCafeTestsPath = __dirname + '/../src/testCafeTests/';



class TestCafeTest {
    constructor({testCafeFile, testCafeFixture},{options: {webpageUrl}}){
        this.testFileName = testCafeFile;
        this.fixtureName = testCafeFixture;
        this.Url = webpageUrl;
    }

    async runTest(){
        if(!this.Url)
            return console.log('Did not find a valid url argument');
        let testFile = await getFilePath(testCafeTestsPath, this.testFileName);
        console.log(testFile);
        if(!testFile)
            return;
        const tempTest = composeTestCafeTest(testFile, this.fixtureName, this.Url);
        writeTempFile(tempFilePath, file, tempTest);
        runTestCafeTest(file);
    }
}

function runTestCafeTest(tempTestPath) {
    exec(`${__dirname}/../node_modules/.bin/testcafe chrome ${tempTestPath} --colors --stop-on-first-fail`, (error, stdout, stderr) =>{
        console.log(stdout || stderr);
        deleteTempFile(tempFilePath);
    });

}

function composeTestCafeTest(path, fixtureName, URL) {
    let string = '';
    let baseTestCafe = fs.readFileSync(path, {
        encoding: "utf8"
    });
    string += `fixture("${fixtureName}").page("${URL}"); \n`;
    string += baseTestCafe;
    return string;
}

module.exports = TestCafeTest;
