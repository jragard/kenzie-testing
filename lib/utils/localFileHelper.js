const fs = require('fs');
const {rreadDir: readDir} = require('./rreadDir');

function deleteTempFile(path) {
    fs.unlink(`${path}/temp.js`, err => {
        if(err){
            console.error(`Failed to delete temp file:
${err}`);
        } else {
            fs.rmdirSync(path);
        }
    });
}

async function writeTempFile(path, file, string) {
    fs.mkdirSync(path);
    fs.writeFileSync(file, string);
}

async function getFilePath(baseDirectory, fileName) {
    let directory = await readDir(baseDirectory);

    let d = directory.filter(f => isJsFile(f) && getFileName(f) === fileName);
    if(!d)
        console.log(`A file name ${name}.js could not be found
Make sure you're in the correct directory and try again`);
    return d.shift();
}

function isJsFile(path) {
    return path.split('.').pop() === 'js';
}

function getFileName(path) {
    return path.replace(/^.*[\\\/]/, '').split('.').shift();
}

module.exports = {
    deleteTempFile,
    writeTempFile,
    getFilePath,
    isJsFile,
    getFileName
};

