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

const gitUrlArg = argv._[0]

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
      if (name.substring(name.length - 2) == 'js') {
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
    console.log('Testing file from github repository - ' + url)
    axios.get(url).then(response => {
      runTests(response.data);
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
        let decodedContent = Buffer.from(content, 'base64').toString();
        runTests(decodedContent);
      });
  }
}

function runTests(studentCode) {
  tempFileStream.write(studentCode.replace(/['"]?use strict['"]?/, ""));
  tempFileStream.write(
    "\nmodule.exports = { kata1: (typeof kata1) === 'function' && kata1, \
                          kata2: (typeof kata2) === 'function' && kata2, \
                          kata3: (typeof kata3) === 'function' && kata3, \
                          kata4: (typeof kata4) === 'function' && kata4, \
                          kata5: (typeof kata5) === 'function' && kata5, \
                          kata6: (typeof kata6) === 'function' && kata6, \
                          kata7: (typeof kata7) === 'function' && kata7, \
                          kata8: (typeof kata8) === 'function' && kata8, \
                          kata9: (typeof kata9) === 'function' && kata9, \
                          kata10: (typeof kata10) === 'function' && kata10, \
                          kata11: (typeof kata11) === 'function' && kata11, \
                          kata12: (typeof kata12) === 'function' && kata12, \
                          kata13: (typeof kata13) === 'function' && kata13, \
                          kata14: (typeof kata14) === 'function' && kata14, \
                          kata15: (typeof kata15) === 'function' && kata15, \
                          kata16: (typeof kata16) === 'function' && kata16, \
                          kata17: (typeof kata17) === 'function' && kata17, \
                          kata18: (typeof kata18) === 'function' && kata18, \
                          kata19: (typeof kata19) === 'function' && kata19, \
                          kata20: (typeof kata20) === 'function' && kata20, \
                          kata21: (typeof kata21) === 'function' && kata21, \
                          kata22: (typeof kata22) === 'function' && kata22, \
                          kata23: (typeof kata23) === 'function' && kata23, \
                          kata24: (typeof kata24) === 'function' && kata24, \
                          kata25: (typeof kata25) === 'function' && kata25, \
                          kata26: (typeof kata26) === 'function' && kata26, \
                          kata27: (typeof kata27) === 'function' && kata27, \
                          kata28: (typeof kata28) === 'function' && kata28, \
                          kata29: (typeof kata29) === 'function' && kata29, \
                          kata30: (typeof kata30) === 'function' && kata30, \
                          kata31: (typeof kata31) === 'function' && kata31, \
                          kata32: (typeof kata31) === 'function' && kata32};"
  );
  spawn("../../node_modules/.bin/mocha", ['--colors'], {
    stdio: "inherit"
  }).on("exit", function (error) {
    if (error) {
      console.log(error);
    }
    exec(`rm ${tempFileToTest}`);
  });
}