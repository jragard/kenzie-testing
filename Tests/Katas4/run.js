const fs = require('fs');
const axios = require('axios');
const {
  exec,
  spawn
} = require('child_process');
const {
  argv
} = require('yargs');

const tempFile = "test/s.js";
const tempFileStream = fs.createWriteStream(tempFile);

if (argv._.length === 0) {
  defaultTest();
} else if (argv._[0].includes("github")) {
  const answer = /.*github.com\/([^/.]*)\/([^/.]*)[.git]?$/.exec(argv._[0]);
  const url = `https://raw.githubusercontent.com/${answer[1]}/${
    answer[2]
  }/master/katas4.js`;
  gitTest(url);
} else if (argv._[0].includes("gitlab")) {
  const url = argv._[0] + "/raw/master/katas4.js";
  gitTest(url);
} else {
  console.log(`invalid command line parameter: ${argv._[0]}`);
}

function defaultTest() {
  studentCode = fs.readFileSync("../../temp.js", {
    encoding: "utf8"
  });
  runTests(studentCode);
}

function gitTest(url) {
  axios.get(url).then(response => {
    runTests(response.data);
  });
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
  spawn("mocha", ['--colors'], {
    stdio: "inherit"
  }).on("exit", function (error) {
    if (error) {
      console.log(error);
    }
    exec(`rm ${tempFile}`);
  });
}