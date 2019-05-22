const axios = require('./../../node_modules/axios');

async function getGitlabFile(name, baseUrl){
  const gitlabFileUrl = await getGitlabUrl(name, baseUrl);
  const gitlabFile = await axios.default.get(gitlabFileUrl, {
      headers:{
          'PRIVATE-TOKEN': process.env.GITLAB_TOKEN
      }
  });
  return gitlabFile.data;
}

async function getGitlabUrl(name, baseUrl){
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

module.exports = {
  getGitlabFile,
  getGitlabUrl
};