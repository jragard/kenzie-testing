const fs = require('fs');
const readDir = require('./rreadDir');

module.exports = {

    deleteTempFile: function (path) {
        fs.unlink(path, err => {
            if(err){
                console.error(`Failed to delete temp file:
${err}`);
            }
        })
    },

    writeTempFile: function (path, string) {
        fs.writeFileSync(path, string);
    },

    getFilePath: async function (baseDirectory, fileName) {
        let directory = await readDir(baseDirectory);
        let d = directory.filter(f => this.isJsFile(f) && this.getFileName(f) === fileName);
        if(!d)
            console.log(`A file name ${name}.js could not be found
Make sure you're in the correct directory and try again`);
        return d.shift();
    },

    isJsFile: function (path) {
        return path.split('.').pop() === 'js';
    },

    getFileName: function (path) {
        return path.replace(/^.*[\\\/]/, '').split('.').shift();
    }
};