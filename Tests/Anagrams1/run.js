const fs = require("fs");
const axios = require("axios");
const { exec, spawn } = require("child_process");
const { argv } = require("yargs");

const tempFile = "./test/s.js";
const tempFileStream = fs.createWriteStream(tempFile);

const arg = argv._

if (argv._.length === 0) {
  defaultTest();
} else if (String(arg[0]).includes("github")) {
  const answer = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(argv._[0]);
  const url = `https://raw.githubusercontent.com/${answer[1]}/${
    answer[2]
  }/master/anagrams.js`;
  gitTest(url);
} else  {
  const url = "https://gitlab.com/api/v4/projects/" + arg[0] + "/repository/files/anagrams%2Ejs?ref=master";
  gitTest(url);
}

function defaultTest() {
  studentCode = fs.readFileSync("./test/temp.js", { encoding: "utf8" });
  runTests(studentCode);
}

function gitTest(url) {
  axios.get(url).then(response => {
    runTests(response.data);
  });
}

function runTests(studentCode) {

  tempFileStream.write("const { words } = require('./words');\n");
  tempFileStream.write(studentCode.replace(/['"]?use strict['"]?/, ""));

  tempFileStream.write(
    "\nmodule.exports = { getAnagramsOf: (typeof getAnagramsOf) === 'function' && getAnagramsOf };"
  );
  spawn("mocha", ['--colors'], { stdio: "inherit" }).on("exit", function(error) {
    if (error) {
      console.log(error);
    }
    exec(`rm ${tempFile}`);
    exec(`rm ./test/temp.js`);
  });
}
