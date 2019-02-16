const fs = require('fs');
const axios = require('../../node_modules/axios');
const fetch = require('../../node_modules/node-fetch');
const {
  exec,
  spawn
} = require('child_process');
const {
  argv
} = require('../../node_modules/yargs');

const tempFileToTest = "test/tempFileToTest.js";
const tempFileStream = fs.createWriteStream(tempFileToTest);

const gitUrlArg = argv._[0];

if (gitUrlArg == null) {
  defaultTest().then(result => {
    exec(`rm ./test/temp.js`);
    let studentCode = result;
    runTests(studentCode);
  });
} else if (String(gitUrlArg).includes("github")) {

  const argVars = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(gitUrlArg);
  const gitUser = argVars[1];
  const gitRepo = argVars[2];

  const gitFetchUrl = `https://api.github.com/repos/${gitUser}/${gitRepo}/contents`;

  axios.get(gitFetchUrl).then(response => {
    for (let i = 0; i < response.data.length; i++) {
      let name = response.data[i].name
      
      if (name.substring(name.length - 2) == 'js' && name.substring(0, name.length - 3) != 'words') {
        fileToTest = name
        let url = `https://raw.githubusercontent.com/${gitUser}/${gitRepo}/master/${fileToTest}`;
        gitTest(url);
      } 
    }
  })

} else {

  const argVars = /.*gitlab.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(gitUrlArg);
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
        urlConstructor['project_id'] = result.id
        return urlConstructor
      })
      resolve(result)
    })
    return promise
  }

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

function defaultTest() {
  let promise = new Promise(function(resolve, reject) {
    if(reject) {
      console.log(reject);
    }
    let result = fs.readFileSync("./test/temp.js", {
      encoding: "utf8"
    });

    resolve(result);
  });
  return promise;
}

function gitTest(url) {
  if (url.includes("github")) {
    axios.get(url).then(response => {
      runTests(response.data);
    });
  } else {

    fetch(url, {
        method: 'GET',
        headers: {
          'PRIVATE-TOKEN': '5ZHEYQdoa5Tgx3yjpdP3'
        }
      })
      .then(res => res.json())
      .then(data => {
        let content = data.content
        let decodedContent = Buffer.from(content, 'base64').toString();
        runTests(decodedContent);
      });
  }
}

function runTests(studentCode) {
  exec(`rm ./test/temp.js`);
  let html = "<!DOCTYPE html><html lang='en'><body><div><input type='text' id='input' size=40><button id='findButton'>Find Anagrams</button></div><script type='text/javascript' src='words.js'></script><script type='text/javascript' src='anagrams1.js'></script></body></html>"

  tempFileStream.write("const { words } = require('./words.js');\n");
  tempFileStream.write('const jsdom = require("jsdom");\n');
  tempFileStream.write('const { JSDOM } = jsdom;\n');
  tempFileStream.write("const dom = new JSDOM(\"" + html + "\")\n");
  tempFileStream.write('global.document = dom.window.document;\n');
  tempFileStream.write(studentCode.replace(/['"]?use strict['"]?/, ""));

  tempFileStream.write(
    "\nmodule.exports = { getAnagramsOf: (typeof getAnagramsOf) === 'function' && getAnagramsOf };"
  );
  spawn("../../node_modules/.bin/mocha", ['--colors'], { stdio: "inherit" }).on("exit", function(error) {
    if (error) {
      console.log(error);
    }
    exec(`rm ${tempFileToTest}`);
  });
}
