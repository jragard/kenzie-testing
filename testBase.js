const fs = require('fs');
const axios = require('./node_modules/axios');
const fetch = require('./node_modules/node-fetch');
const {exec} = require('child_process');
const {argv} = require('./node_modules/yargs');

class TestBase {
    constructor(directory, functions) {
        this.testDirectory = `${directory}/test/`;
        this.args = argv._[0];
        this.loadStudentFile();
        this.functions = this.loadFunctions(functions);
    }

    get getFunctions(){
        return this.functions;
    }

    get getStudentFile(){
        return this.studenFile;
    }

    loadStudentFile(){
        if(this.args == null){
            this.studenFile = this.loadLocalFile();
            exec(`rm ./test/temp.js`);
        }
        else if(String(this.args).includes("github")){
            this.studenFile = this.loadGitFile(this.getGithubUrl());
        }
        else{
            this.studenFile = this.loadGitFile(this.getGitlabUrl())
        }
    }

    loadLocalFile(){
        try {
            let result = fs.readFileSync(`${this.testDirectory}/temp.js`, {
                encoding: "utf8"
            });
            return result;
        }
        catch (e) {
            
        }
    }

    loadGitFile(){
        console.log('Testing file from github repository - ' + url);
        if (url.includes("github")) {
            axios.get(url).then(response => {
                return response.data;
            });
        } else {
            console.log('Testing file from gitlab repository - ' + url)
            fetch(url, {
                method: 'GET',
                headers: {
                    'PRIVATE-TOKEN': '5ZHEYQdoa5Tgx3yjpdP3'
                }
            })
                .then(res => res.json())
                .then(data => {
                    let content = data.content
                    return Buffer.from(content, 'base64').toString();
                });
        }
    }

    getGithubUrl(){
        const argVars = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(this.args);
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
    getGitlabUrl(){
        const argVars = /.*gitlab.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(this.args);
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
            }).then(result => {
                gitTest(result);
            })
        })
    }
    loadFunctions(functions){
        let result = "\nmodule.exports = {";
        functions.split(",").forEach(funct =>{
            result += `${funct}: (typeof ${funct}) === 'function' && ${funct},`
        });
        result += "}";
        return result;
    }
}




module.exports = {
    TestBase
};
