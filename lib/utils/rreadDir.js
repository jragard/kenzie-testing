const { join } = require('path');
const { readdir, stat } = require('fs');
const { promisify } = require('util');

const readdirP = promisify(readdir);
const statP = promisify(stat);


async function rreadDir(dir, allFiles = []) {
    const files = (await readdirP(dir)).map(f => join(dir, f));
    allFiles.push(...files);
    await Promise.all(
        files.map(
            async f => (await statP(f)).isDirectory() && rreadDir(f, allFiles)
        )
    );
    return allFiles
}

module.exports = {rreadDir};