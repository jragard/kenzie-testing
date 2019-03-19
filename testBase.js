let _ = require('./node_modules/lodash');
const fs = require('fs');
const axios = require('./node_modules/axios');
const fetch = require('./node_modules/node-fetch');
const {exec} = require('child_process');
const {argv} = require('./node_modules/yargs');
const Mocha = require('./node_modules/mocha');
const TestCafe = require('./node_modules/testcafe');


const optionsDefault ={
    mochaTest: "test.js",
    mochaFunctions: null,
    mochaDom: "",
    mochaExtra: [""],
    testCafeTests: "testCafe.js",
    testCafeFixture: null
};

/**
 * Builds a file to test in Mocha
 *
 * @class
 * @constructor
 * @param {string} directory - The path to the test directory.
 * @param {object} options - Any other needed information to pass into the tests.
 *
 * @property {string} mochaTest - The name of the mocha test file, Ex. test.js
 * @property {string} mochaFunctions - a comma separated string with all the functions to test in mocha.
 * @property {string} mochaDom - Any html to add to the students file for mocha testing.
 * @property {[string]} mochaExtra - a string array of any other code to add to students files before running a mocha test.
 * @property {string} testCafeTests - The name of the testcafe test file, Ex. testCafe.js
 * @property {string} - testCafeFixture - Title for the testcafe test.
 */
class TestBase {
    constructor(directory, options) {
        this.testDirectory = `${directory}/test/`;
        this.options = setDefaults(options, optionsDefault);
    }

    /**
     * Creates a tempFileToTest.js to test in Mocha
     * @async
     * This function find the students file, adds any needed code to the file and then writes the new mocha testable file to the test directory.
     */
    async writeStudentMochaTestFile(){
        const tempFileToTest = `${this.testDirectory}/tempFileToTest.js`;
        let file = await loadStudentFile(this.testDirectory);
        fs.writeFileSync(tempFileToTest, getTestFile(file, this.options.mochaFunctions, this.options.mochaDom, this.options.mochaExtra), function(err) {
           console.log(err)});
    }

    /**
     * Creates the needed tests and runs testcafe tests on the students hosted web page.
     * @async
     */
    async runTestCafeTest(){
        const {gitpage} = argv;
        const tempTestCafeFile = `${this.testDirectory}/tempTestCafeFile.js`;
        if(!gitpage)
            return console.log("Please provide a url");

        let file = getTestCafeTest(this.testDirectory, this.options.testCafeTests, this.options.testCafeFixture, gitpage);
        fs.writeFileSync(tempTestCafeFile, file);
        exec(`../../node_modules/.bin/testcafe chrome ${tempTestCafeFile} --colors`, (error, stdout, stderr) =>{
            console.log(stdout || stderr);
            exec(`rm ${tempTestCafeFile}`);
        })
    }

    /**
     * Creates a testable file from the students code and runs mocha testing on the file.
     * @async
     */
    async runMochaTest(){
        let mocha = new Mocha({
            useColors: true
        });
        await this.writeStudentMochaTestFile();
        mocha.addFile(`${this.testDirectory}/test.js`);
        mocha.run()
            .on('end', function() {
                console.log('All done');
            });
        exec(`rm ${this.testDirectory}/tempFileToTest.js`);
    }
}

module.exports = {
    TestBase
};



function getTestCafeTest(dir, file, fixtureName, URL) {
    let string = '';
    let baseTestCafe = loadLocalFile(dir, file);

    string += `fixture("${fixtureName}").page("${URL}"); \n`;
    string += baseTestCafe;
    return string;
}

/**
 * Assigns default values to any of the options that were not provided.
 * @param options
 * @param defaults
 */

function setDefaults(options, defaults){
    return _.defaults({}, _.clone(options), defaults);
}
/**
 * Return student code as string
 * @async
 * @param {string} dir - Path to test directory
 * @returns {Promise<string>} - string of all code in a student file.
 */
async function loadStudentFile(dir)
{
    const {gitlink} = argv;
    console.log(gitlink);
    let r;
    switch (true) {
        /**
         * If no additional arguments such as remote git links are provided
         * load the temp.js created in index.js
         */
        case (gitlink == null):
            r = loadLocalFile(dir, 'temp.js');
            exec(`rm ${dir}/temp.js`);
            break;

        /**
         * If git arguments were provided load a file from a remote git.
         */
        case (gitlink.includes("github")):
           let url = await getGithubUrl(gitlink);
           r = await loadGitFile(url);
           break;

        case (gitlink.includes("gitlab")):
            let labUrl = await getGitlabUrl(gitlink);
            r = await loadGitFile(labUrl);
            break;

        /**
         * Else there was not a valid git link
         */
        default:
            console.log("Please input a valid Github, or Gitlab url");
    }
    return r;
}

/**
 * Returns code loaded from the students local file.
 * @param {string} dir - file path to the local file
 * @returns {string} - returns all code from the file
 */
function loadLocalFile(dir, file){
    try {
        return fs.readFileSync(`${dir}/${file}`, {
            encoding: "utf8"
        });
    }
    catch (e) {}
}

/**
 * Get the raw url for the github repo
 * @async
 * @param {string} args - Github URL
 * @returns {Promise<string>} - returns the raw.githubusercontent.com/ URL for the file
 *
 * TODO Add private tokens to allow testing of private repo
 */
async function getGithubUrl(args){
    const argVars = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
    const gitUser = argVars[1];
    const gitRepo = argVars[2];

    const gitFetchUrl = `https://api.github.com/repos/${gitUser}/${gitRepo}/contents`;
    let response = await axios.default.get(gitFetchUrl);

    for(let i=0; i < response.data.length; i++){
        let name = response.data[i].name;
        if(name.substring(name.length-2) === 'js'){
            return `https://raw.githubusercontent.com/${gitUser}/${gitRepo}/master/${name}`;
        }
    }
}

/**
 * Get the raw url for the gitlab repo
 * @async
 * @param {string} args - gitlab project URL
 * @returns {Promise<string>} - returns a URL to the RAW file
 */
async function getGitlabUrl(args) {
    const argVars = /.*gitlab.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
    const gitUser = argVars[1];
    const gitRepo = argVars[2];
    let getID = `https://gitlab.com/api/v4/projects/${gitUser}%2F${gitRepo}/repository/tree`;
    /**
     * Use a private-token to ensure private repos can be viewed.
     */
    let response = await axios.default.get(getID, {
        headers:{
            'PRIVATE-TOKEN': 'YiszMsh_vtySaoLLRZLd'
        }
    });

    for(let i = 0; i < response.data.length; i++){
        let name = response.data[i].name;
        if(name.substring(name.length-2) === 'js'){
            name.replace('.', '%2');
            return `https://gitlab.com/api/v4/projects/${gitUser}%2F${gitRepo}/repository/files/${name}/raw?ref=master`;
        }
    }
}

/**
 *
 * Gets the code from a file stored in a remote git
 * @async
 * @param {string} url - URL to the raw file
 * @returns {Promise<string>} - returns all code in linked file.
 */
async function loadGitFile(url){
    console.log(url);
    if (url.includes("github")) {
        let file = await axios.default.get(url);
        return file.data
    } else {
        let file = await axios.default.get(url, {
            headers:{
                'PRIVATE-TOKEN': 'YiszMsh_vtySaoLLRZLd'
            }
        });
        console.log(file);
        return file.data;
    }
}

/**
 * Writes a testable file using the students file and any other needed code.
 * @param {string} file - string of all code from the students file.
 * @param {string} functions - string adding a module.exports to the file to export all of the needed functions.
 * @param {string} dom - any HTML required for the test to function.
 * @param {array} extra - any extra code to add to the file.
 * @returns {string} - returns the code for a testable file based on all parameters.
 */
function getTestFile(file, functions, dom, extra){
    let string = "";
    if(dom !== null){
        string += 'const jsdom = require("jsdom");\n' +
            'const { JSDOM } = jsdom;\n' +
            `const dom = new JSDOM(\"  ${dom}  \")\n` +
            'global.document = dom.window.document;\n'
    }
    if(extra !== null){
        string += " \n " + extra.join(" \n ");
    }
    string += file.replace(/['"]?use strict['"]?/, "");
    string += loadFunctions(functions);
    return string;
}

/**
 * Takes a CSV list of functions and returns a string for exporting those functions from a file.
 * @param {string} functions - functions to export
 * @returns {string} - returns a the code for a module.exports object.
 */
function loadFunctions(functions){
    let result = "\nmodule.exports = {";
    functions.split(",").forEach(funct =>{
        result += `${funct}: (typeof ${funct}) === 'function' && ${funct},`
    });
    result += "}";
    return result;
}

