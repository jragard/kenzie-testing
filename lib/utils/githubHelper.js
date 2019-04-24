//TODO add private token to allow 5000 requests per hour as opposed to 60.
const axios = require('./../../node_modules/axios');
module.exports ={
    getGithubFile: async function (name, baseUrl) {
        const githubFileUrl = await this.getGithubUrl(name, baseUrl);
        const githubFile = await axios.default.get(githubFileUrl);
        return githubFile.data;
    },
    getGithubUrl: async function (name, baseUrl){
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
};

