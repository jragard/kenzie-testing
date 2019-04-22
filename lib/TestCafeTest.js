const readDir = require('./utils/rreadDir');
const fs = require('fs');
const tempFilePath = './../src/temp/tempCafe.js';
const testCafeTestsPath = './../src/testCafeTests/';
const {exec} = require('child_process');


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
        const tempTest = getTestCafeTest(testFile, this.fixtureName, this.Url);
        writeTempFile(tempFilePath, tempTest);
        runTestCafeTest(tempFilePath);
    }
}

function runTestCafeTest(tempTestPath) {
    exec(`../node_modules/.bin/testcafe chrome ${tempTestPath} --colors --stop-on-first-fail`, (error, stdout, stderr) =>{
        console.log(stdout || stderr);
        exec(`rm ${tempFilePath}`);
    });
}

function getTestCafeTest(path, fixtureName, URL) {
    let string = '';
    let baseTestCafe = fs.readFileSync(path, {
        encoding: "utf8"
    });
    string += `fixture("${fixtureName}").page("${URL}"); \n`;
    string += baseTestCafe;
    return string;
}


async function getFilePath(baseDirectory, fileName) {
    let directory = await readDir(baseDirectory);
    let d = directory.filter(f => isJsFile(f) && getFileName(f) === fileName);
    if(!d)
        console.log(`A file name ${name}.js could not be found
Make sure you're in the correct directory and try again`);
    return d.shift();
}

function writeTempFile(tempFilePath, string){
    fs.writeFileSync(tempFilePath, string);
}

const isJsFile = path => path.split('.').pop() === 'js';

const getFileName = path => path.replace(/^.*[\\\/]/, '').split('.').shift();

module.exports = TestCafeTest;
