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
 * @param {string} functions - CSV list of desired functions to test.
 * @param {string} dom - required HTML for testing DOM elements.
 * @param {array} additional - a string array with any other code to add to the test.
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
     */
    async writeTestFile(){
        const tempFileToTest = `${this.testDirectory}/tempFileToTest.js`;
        let file = await loadStudentFile(this.testDirectory, this.args);
        fs.writeFileSync(tempFileToTest, getTestFile(file, this.functions, this.DOM, this.extra), function(err) {
           console.log(err)})
    }

    /**
     * Deletes the tempFileToTest.js
     */
    deleteTestFile(){
        exec(`rm ${this.testDirectory}/tempFileToTest.js`);
    }
}

module.exports = {
    TestBase
};

async function loadStudentFile(dir, args)
{
    let r;
    switch (true) {
        case (args == null):
            r = loadLocalFile(dir);
            exec(`rm ${dir}/temp.js`);
            break;

        case (args.includes("github")):
           let url = await getGithubUrl(args);
           r = await loadGitFile(url);
           break;

        case (args.includes("gitlab")):
            let labUrl = await getGitlabUrl(args);
            r = await loadGitFile(labUrl);

            break;
        default:
            console.log("Please input a valid Github, or Gitlab url");
    }
    return r;

}

function loadLocalFile(dir){
    try {
        return fs.readFileSync(`${dir}/temp.js`, {
            encoding: "utf8"
        });
    }
    catch (e) {

    }
}

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

async function getGitlabUrl(args) {
    const argVars = /.*gitlab.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
    const gitUser = argVars[1];
    const gitRepo = argVars[2];

    let getID = `https://gitlab.com/api/v4/projects/${gitUser}%2F${gitRepo}/repository/tree`;
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

function loadFunctions(functions){
    let result = "\nmodule.exports = {";
    functions.split(",").forEach(funct =>{
        result += `${funct}: (typeof ${funct}) === 'function' && ${funct},`
    });
    result += "}";
    return result;
}