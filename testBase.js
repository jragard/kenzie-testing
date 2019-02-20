const fs = require('fs');
const axios = require('./node_modules/axios');
const fetch = require('./node_modules/node-fetch');
const {exec} = require('child_process');
const {argv} = require('./node_modules/yargs');


/**
 * Builds the test documents
 *
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
        this.studentFile = loadStudentFile(this.testDirectory, this.args);
        this.DOM = DOM;
        this.extra = additional;
        this.functions = loadFunctions(functions);
    }

    /**
     * Creates a tempFileToTest.js
     */
    writeTestFile(){
        const tempFileToTest = `${this.testDirectory}/tempFileToTest.js`;
        fs.writeFileSync(tempFileToTest, getTestFile(this.studentFile, this.functions, this.DOM, this.extra), function(err) {
            console.log(err)});
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


function loadStudentFile(dir, args)
{
    if (args == null) {
        let r = loadLocalFile(dir);
        exec(`rm ${dir}/temp.js`);
        return r;
    } else if (String(args).includes("github")) {
        return loadGitFile(getGithubUrl(args));
    } else {
        return loadGitFile(getGitlabUrl(args))
    }
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

function loadGitFile(){
    console.log('Testing file from github repository - ' + url);
    if (url.includes("github")) {
        axios.get(url).then(response => {
            return response.data;
        });
    } else {
        console.log('Testing file from gitlab repository - ' + url);
        fetch(url, {
            method: 'GET',
            headers: {
                'PRIVATE-TOKEN': '5ZHEYQdoa5Tgx3yjpdP3'
            }
        })
            .then(res => res.json())
            .then(data => {
                let content = data.content;
                return Buffer.from(content, 'base64').toString();
            });
    }
}

function getGithubUrl(args){
    const argVars = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
    const gitUser = argVars[1];
    const gitRepo = argVars[2];

    const gitFetchUrl = `https://api.github.com/repos/${gitUser}/${gitRepo}/contents`;

    axios.get(gitFetchUrl).then(response => {
        for (let i = 0; i < response.data.length; i++) {
            let name = response.data[i].name;
            if (name.substring(name.length - 2) === 'js') {
                return `https://raw.githubusercontent.com/${gitUser}/${gitRepo}/master/${name}`;
            }
        }
    })
}

function getGitlabUrl(args){
    const argVars = /.*gitlab.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
    const gitUser = argVars[1];
    const gitRepo = argVars[2];

    let getID = `https://gitlab.com/api/v4/projects/${gitUser}%2F${gitRepo}`
    const urlConstructor = {}

    const getFinalUrl = function() {
        let promise = new Promise(function(resolve, reject) {

            let result = fetch(getID, {
                method: 'GET',
                headers: {
                    'PRIVATE-TOKEN': 'YiszMsh_vtySaoLLRZLd'
                }
            }).then(result => {
                return result.json()
            }).then(result => {
                urlConstructor['project_id'] = result.id;
                return urlConstructor
            });
            resolve(result)
        });
        return promise
    };

    getFinalUrl().then(result => {
        let projectID = urlConstructor['project_id'];
        fetch(`https://gitlab.com/api/v4/projects/${projectID}/repository/tree`, {
            method: 'GET',
            headers: {
                'PRIVATE-TOKEN': 'YiszMsh_vtySaoLLRZLd'
            }
        }).then(result => {
            return result.json()
        }).then(result => {
            urlConstructor['filename'] = result[0].name;
            return urlConstructor;
        }).then(result => {
            let filename = urlConstructor['filename'];
            let projectID = urlConstructor['project_id'];
            let extRegex = /\./;
            let extIndex = extRegex.exec(filename).index;
            let extension = filename.slice(extIndex+1);
            let fileString = filename.slice(0, extIndex);
            let fileContentsUrl = `https://gitlab.com/api/v4/projects/${projectID}/repository/files/${fileString}%2E${extension}?ref=master`
            return fileContentsUrl;
        })
    })
}