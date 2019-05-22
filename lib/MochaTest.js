const fs = require('fs');
const Mocha = require('./../node_modules/mocha');
const {getFilePath, writeTempFile, deleteTempFile} = require('./utils/localFileHelper');
const {getGitlabFile} = require('./utils/gitlabHelper');
const {getGithubFile} = require('./utils/githubHelper');
const tempFilePath = __dirname + '/../src/temp/temp.js';
const mochaTestsPath = __dirname + '/../src/mochaTests/';

class MochaTest {
    constructor({name, mochaTestFile = null, mochaFunctions = null, mochaDom = "", mochaExtra = [""]}, {options: {filePath, gitRepo}}){
        this.name = name;
        this.testFile = mochaTestFile;
        this.functions = mochaFunctions;
        this.dom = mochaDom;
        this.extraCode = mochaExtra;
        this.filePath = filePath;
        this.gitRepoURL = gitRepo;
    }

    async runTest(){
        const studentFiles = await this.getStudentFile()
        if(!studentFiles) return;
        await writeTempFile(tempFilePath, studentFiles);
        const mochaTestFile = await getFilePath(mochaTestsPath, this.testFile);
        runMochaTest(mochaTestFile);
    }

    async getStudentFile(){
        let fileString;
        if(this.gitRepoURL){
            fileString = await this.getGitRepoFile(this.name, this.gitRepoURL);
        } else {
            fileString = await this.getlocalStudentFile(this.name, this.filePath);
        }

        if(!fileString)
            return console.log("No files Found");
        return composeFile(this.extraCode, this.dom, fileString, this.functions);
    }

    async getGitRepoFile(name, url) {
        switch (true) {
            case url.includes('github'):
                return await getGithubFile(name, url);
            case url.includes('gitlab'):
                return await getGitlabFile(name, url);
            default: return console.log(`Sorry could not find the repo. Check your url is a github or gitlab link and try again`)
        }
    }

    async getlocalStudentFile(name, filepath){
        let f = await getLocalStudentFilePaths(name, filepath).catch(err => console.error(err));
        return fs.readFileSync(f, 'utf8');
    }
}

function runMochaTest(testFilePath){
    let mocha = new Mocha({
        useColors: true
    });
    mocha.addFile(testFilePath);
    mocha.run()
        .on('end', function() {
            console.log('All done');
            deleteTempFile(tempFilePath)
        });
}

getLocalStudentFilePaths = async (name, path) =>!path ? await getLocalStudentFilePath(name) : getLocalStudentFileDirect(path);

function getLocalStudentFileDirect(path){
    if(fs.existsSync(path))
        return path;
    return console.log(`Sorry ${path} doesn't exist
Make sure you're using the full file path and try again.`)
}

async function getLocalStudentFilePath(name){
    const filepath = process.cwd();
    return await getFilePath(filepath, name);
}

function composeFile(extra, dom, base, functions) {
    return `${extra}
${dom}
${base}
${getFunctions(functions)}`;
}

const getFunctions = functions => `
module.exports = { ${functions.reduce((acc, func) => acc + `${func}: (typeof ${func}) === 'function' && ${func},`, '')} }`;




module.exports = MochaTest;
