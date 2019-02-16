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

const tempFile = "test/s.js";
const tempFileStream = fs.createWriteStream(tempFile);

const args = argv._[0]

if (args == null) {
  defaultTest();
} else if (String(args).includes("github")) {

  const argVars = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
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

  const argVars = /.*gitlab.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(args);
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
  studentCode = fs.readFileSync("./test/temp.js", {
    encoding: "utf8"
  });
  runTests(studentCode);
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

    "\nmodule.exports = { reverseString: (typeof reverseString) === 'function' && reverseString, \
                          testReverseString1: (typeof testReverseString1) === 'function' && testReverseString1, \
                          testReverseString2: (typeof testReverseString2) === 'function' && testReverseString2, \
                          reverseSentence: (typeof reverseSentence) === 'function' && reverseSentence, \
                          testReverseSentence1: (typeof testReverseSentence1) === 'function' && testReverseSentence1, \
                          testReverseSentence2: (typeof testReverseSentence2) === 'function' && testReverseSentence2, \
                          minimumValue: (typeof minimumValue) === 'function' && minimumValue, \
                          testMinimumValue1: (typeof testMinimumValue1) === 'function' && testMinimumValue1, \
                          testMinimumValue2: (typeof testMinimumValue2) === 'function' && testMinimumValue2, \
                          maximumValue: (typeof maximumValue) === 'function' && maximumValue, \
                          testMaximumValue1: (typeof testMaximumValue1) === 'function' && testMaximumValue1, \
                          testMaximumValue2: (typeof testMaximumValue2) === 'function' && testMaximumValue2, \
                          calculateRemainder: (typeof calculateRemainder) === 'function' && calculateRemainder, \
                          testCalculateRemainder1: (typeof testCalculateRemainder1) === 'function' && testCalculateRemainder1, \
                          testCalculateRemainder2: (typeof testCalculateRemainder2) === 'function' && testCalculateRemainder2, \
                          distinctValues: (typeof distinctValues) === 'function' && distinctValues, \
                          testDistinctValues1: (typeof testDistinctValues1) === 'function' && testDistinctValues1, \
                          testDistinctValues2: (typeof testDistinctValues1) === 'function' && testDistinctValues1, \
                          countValues: (typeof countValues) === 'function' && countValues, \
                          testCountValues1: (typeof testCountValues1) === 'function' && testCountValues1, \
                          testCountValues2: (typeof testCountValues2) === 'function' && testCountValues2, \
                          evaluateExpression: (typeof evaluateExpression) === 'function' && evaluateExpression, \
                          testEvaluateExpression1: (typeof testEvaluateExpression1) === 'function' && testEvaluateExpression1, \
                          testEvaluateExpression2: (typeof testEvaluateExpression2) === 'function' && testEvaluateExpression2 }"
    );
    spawn("./node_modules/.bin/mocha", ['--colors'], { stdio: "inherit" }).on("exit", function(error) {
    if (error) {
        console.log(error);
    }
    exec(`rm ${tempFile}`);
    exec(`rm ./test/temp.js`)
    });
};