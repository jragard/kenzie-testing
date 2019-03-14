const fs = require('fs');
const axios = require('./node_modules/axios');
const fetch = require('./node_modules/node-fetch');
const {exec} = require('child_process');
const {argv} = require('./node_modules/yargs');


/**
 * Builds a file to test in Mocha
 *
 * @class
 * @constructor
 * @param {string} directory - The path to the test directory.
 * @param {string} functions - a CSV list of functions to test.
 * @param {array<string>} additional - a string array with any other code to add to the students file.
 */
class TestBase {
    constructor(directory, functions, DOM = null, additional = null) {
        this.testDirectory = `${directory}/test/`;
        this.args = argv._[0];
        this.DOM = DOM;
        this.extra = additional;
        this.functions = loadFunctions(functions);
    }

    /**
     * Creates a tempFileToTest.js
     * @async
     * This function find the students file, adds any needed code to the file and then writes the new testable file to the test directory.
     */
    async writeTestFile(){
        const tempFileToTest = `${this.testDirectory}/tempFileToTest.js`;
        let file = await loadStudentFile(this.testDirectory, this.args);
        fs.writeFileSync(tempFileToTest, getTestFile(file, this.functions, this.DOM, this.extra), function(err) {
           console.log(err)})
    }

    /**
     * Deletes the current tempFileToTest.js in the test directory
     */
    deleteTestFile(){
        exec(`rm ${this.testDirectory}/tempFileToTest.js`);
    }
}

module.exports = {
    TestBase
};

/**
 * Return student code as string
 * @async
 * @param {string} dir - Path to test directory
 * @param {string} args - remote Git links
 * @returns {Promise<string>} - string of all code in a student file.
 */
async function loadStudentFile(dir, args)
{
    let r;
    switch (true) {
        /**
         * If no additional arguments such as remote git links are provided
         * load the temp.js created in index.js
         */
        case (args == null):
            r = loadLocalFile(dir);
            exec(`rm ${dir}/temp.js`);
            break;

        /**
         * If git arguments were provided load a file from a remote git.
         */
        case (args.includes("github")):
           let url = await getGithubUrl(args);
           r = await loadGitFile(url);
           break;

        case (args.includes("gitlab")):
            let labUrl = await getGitlabUrl(args);
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
function loadLocalFile(dir){
    try {
        return fs.readFileSync(`${dir}/temp.js`, {
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
    string += functions;
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