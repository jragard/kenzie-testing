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

  // getSha returns a url which is used to fetch the filename
  const getSha = function() {

    let promise = new Promise(function(resolve, reject) {
      let sha = fetch(shaURL, {
        method: 'GET',
        headers: {
          'PRIVATE-TOKEN': 'YiszMsh_vtySaoLLRZLd'
        }
      });
      resolve(`https://api.github.com/repos/jragard/katas1/git/trees/7a346f8fe0e8b67f733ef7b93213e5db3f3c75b7`);
    });
    return promise;
  }




  let fileToTest;
  let url;
  const argVars = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
  const gitUser = argVars[1];
  const gitRepo = argVars[2];

  const gitFetchUrl = `https://api.github.com/repos/${gitUser}/${gitRepo}/contents`;

  axios.get(gitFetchUrl).then(response => {
    fileToTest = response.data[0].name;
    url = `https://raw.githubusercontent.com/${gitUser}/${gitRepo}/master/${fileToTest}`;
    gitTest(url);
  });

} else {

  // I'm trying to fetch the html content of a gitlab repo to grab its project ID to make a url

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