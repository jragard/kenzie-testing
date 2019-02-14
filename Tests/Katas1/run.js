const fs = require('fs');
const axios = require('axios');
const fetch = require('node-fetch');
const {
  exec,
  spawn
} = require('child_process');
const {
  argv
} = require('yargs');
// const { assessment } = require('../../index.js');

const tempFile = "test/s.js";
const tempFileStream = fs.createWriteStream(tempFile);

const args = argv._[0]

if (args == null) {
  defaultTest();
} else if (String(args).includes("github")) {

  const argVars = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
  const gitUser = argVars[1];
  const gitRepo = argVars[2];

  // getSha returns a url which is used to fetch the filename
  // let shaUrl = `https://api.github.com/repos/${gitUser}/${gitRepo}/commits`;

  // const getSha = function() {

  //   let promise = new Promise(function(resolve, reject) {

  //     let result = fetch(shaUrl, {
  //       method: 'GET',
  //       headers: {
  //         'PRIVATE-TOKEN': 'YiszMsh_vtySaoLLRZLd'
  //       }
  //     }).then(result => {
  //       return result.json();
  //     }).then(result => {
  //       let filenameUrl = result[0].commit.tree.url;
  //       return filenameUrl;
  //     })
  //     resolve(result);
  //   });
  //   return promise;
  // }

  // getSha().then(result => {
  //   fetch(result, {
  //     method: 'GET',
  //       headers: {
  //         'PRIVATE-TOKEN': 'YiszMsh_vtySaoLLRZLd'
  //       }
  //   }).then(result => {
  //     return result.json()
  //   }).then(result => {
  //     let filename = result.tree[0].path;
  //     let url = `https://raw.githubusercontent.com/${gitUser}/${gitRepo}/master/${filename}`;
  //     console.log(url)
  //   })
  // })




  // let fileToTest;
  // let url;
  // const argVars = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
  // const gitUser = argVars[1];
  // const gitRepo = argVars[2];

  const gitFetchUrl = `https://api.github.com/repos/${gitUser}/${gitRepo}/contents`;

  axios.get(gitFetchUrl).then(response => {
    fileToTest = response.data[0].name;
    url = `https://raw.githubusercontent.com/${gitUser}/${gitRepo}/master/${fileToTest}`;
    gitTest(url);
  });
  
} else {

  const argVars = /.*gitlab.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
  const gitUser = argVars[1];
  const gitRepo = argVars[2];

  const assessment = new RegExp(gitRepo, 'i');

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
  studentCode = fs.readFileSync("./test/temp.js", {
    encoding: "utf8"
  });
  runTests(studentCode);
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
  console.log('runTests')
  tempFileStream.write(studentCode.replace(/['"]?use strict['"]?/, ""));
  tempFileStream.write(
    "\nmodule.exports = { oneThroughTwenty: (typeof oneThroughTwenty) === 'function' && oneThroughTwenty, evensToTwenty: (typeof evensToTwenty) === 'function' && evensToTwenty, oddsToTwenty: (typeof oddsToTwenty) === 'function' && oddsToTwenty, multiplesOfFive: (typeof multiplesOfFive) === 'function' && multiplesOfFive, squareNumbers: (typeof squareNumbers) === 'function' && squareNumbers, countingBackwards: (typeof countingBackwards) === 'function' && countingBackwards, evenNumbersBackwards: (typeof evenNumbersBackwards) === 'function' && evenNumbersBackwards, oddNumbersBackwards: (typeof oddNumbersBackwards) === 'function' && oddNumbersBackwards, multiplesOfFiveBackwards: (typeof multiplesOfFiveBackwards) === 'function' && multiplesOfFiveBackwards, squareNumbersBackwards: (typeof squareNumbersBackwards) === 'function' && squareNumbersBackwards, }"
  );
  spawn("./node_modules/.bin/mocha", ['--colors'], {
    stdio: "inherit"
  }).on("exit", function (error) {
    if (error) {
      console.log(error);
    }
    exec(`rm ${tempFile}`);
    exec(`rm ./test/temp.js`);
  });
}