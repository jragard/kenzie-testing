const fs = require('fs');
const Mocha = require('./../node_modules/mocha');
const axios = require('./../node_modules/axios');
const localHelper = require('./localFileHelper');

const tempFilePath = './../src/temp/temp.js';
const mochaTestsPath = './../src/mochaTests/';

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
        const studentFiles = await this.getStudentFile();
        if(!studentFiles) return;
        localHelper.writeTempFile(tempFilePath, studentFiles);
        const mochaTestFile = await await localHelper.getFilePath(mochaTestsPath, this.testFile);
        runMochaTest(mochaTestFile);
    }

    async getStudentFile(){
        let fileString;
        if(this.gitRepoURL){
            fileString = await getGitRepoFile(this.name, this.gitRepoURL);
        } else {
            fileString = await getlocalStudentFile(this.name, this.filePath);
        }

        if(!fileString)
            return console.log("No files Found");
        return composeFile(this.extraCode, this.dom, fileString, this.functions);
    }
}

async function getGitRepoFile(name, url) {
    switch (true) {
        case url.includes('github'):
            return await getGithubFile(name, url);
        case url.includes('gitlab'):
            return await getGitlabFile(name, url);
        default: return console.log(`Sorry could not the repo. Check your url is a github or gitlab link and try again`)
    }
}

//TODO split into gitlab module
async function getGitlabFile(name, baseUrl){
    const gitlabFileUrl = await getGitlabUrl(name, baseUrl);
    const gitlabFile = await axios.default.get(gitlabFileUrl, {
        headers:{
        'PRIVATE-TOKEN': process.env.GITLAB_TOKEN
        }
    });
    return gitlabFile.data;
}

async function getGitlabUrl(name, baseUrl) {
    const argVars = /.*gitlab.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(baseUrl);
    const gitUser = argVars[1];
    const gitRepo = argVars[2];
    const getID = `https://gitlab.com/api/v4/projects/${gitUser}%2F${gitRepo}/repository/tree?recursive=true`;

    const gitFileTree = await axios.default.get(getID, {
        headers:{
            'PRIVATE-TOKEN': process.env.GITLAB_TOKEN
        }
    });

    const gitlabFile = gitFileTree.data.find(f => f.name.toLowerCase().includes(`${name}.js`));
    return `https://gitlab.com/api/v4/projects/${gitUser}%2F${gitRepo}/repository/files/${gitlabFile.path.replace('/', '%2F')}/raw?ref=master`;
}


//TODO split into github module and add private token to allow 5000 requests per hour as opposed to 60.
async function getGithubFile(name, baseUrl) {
    const githubFileUrl = await getGithubUrl(name, baseUrl);
    const githubFile = await axios.default.get(githubFileUrl);
    return githubFile.data;
}

async function getGithubUrl(name, baseUrl){
    const argVars = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(baseUrl);
    const gitUser = argVars[1];
    const gitRepo = argVars[2];
    const gitFetchSha = `https://api.github.com/repos/${gitUser}/${gitRepo}/git/refs/heads/master`;

    const rigRef = await axios.default.get(gitFetchSha);

    const repoFiles = await axios.default.get(`https://api.github.com/repos/${gitUser}/${gitRepo}/git/trees/${rigRef.data.object.sha}?recursive=3`);

    if(!repoFiles.data)
        return console.log(`Sorry could not find a file name ${name}.js`);

    const filePath = repoFiles.data.tree.find(f => f.path.toLowerCase().includes(`${name}.js`));

    return `https://raw.githubusercontent.com/${gitUser}/${gitRepo}/master/${filePath.path}`;
}


//TODO Split all local file functions to separate module to reduce clutter.
function runMochaTest(testFilePath){
    let mocha = new Mocha({
        useColors: true
    });
    mocha.addFile(testFilePath);
    mocha.run()
        .on('end', function() {
            console.log('All done');
            localHelper.deleteTempFile(tempFilePath)
        });
}

async function getlocalStudentFile(name, filepath){
    let f = await getLocalStudentFilePaths(name, filepath);
    return fs.readFileSync(f, 'utf8');
}


async function getLocalStudentFilePaths(name, path){
    if(!path){
        return await getLocalStudentFilePath(name);
    }
    else {
        return getLocalStudentFileDirect(path)
    }
}

function getLocalStudentFileDirect(path){
    if(fs.existsSync(path))
        return path;
    return console.log(`Sorry ${path} doesn't exist
Make sure you're using the full file path and try again.`)
}

async function getLocalStudentFilePath(name){
    const filepath = process.cwd();
    return await localHelper.getFilePath(filepath, name);
}

const composeFile = (extra, dom, base, functions) => `${extra}
${dom}
${base}
${getFunctions(functions)}`;

const getFunctions = functions => `
module.exports = { ${functions.reduce((acc, func) => acc + `${func}: (typeof ${func}) === 'function' && ${func},`, '')} }`;




module.exports = MochaTest;
