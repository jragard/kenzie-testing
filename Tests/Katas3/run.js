const fs = require("fs");
const axios = require("axios");
const { exec, spawn } = require("child_process");
const { argv } = require("yargs");
const filepath = "test/s.js";
const file = fs.createWriteStream(filepath);

const answer = /.*github.com\/(\w*)\/(\w*)[.git]?$/.exec(argv._[0]);
const url = `https://raw.githubusercontent.com/${answer[1]}/${
  answer[2]
}/master/katas3.js`;

axios.get(url).then(response => {
  file.write(response.data.replace(/use ['"]?strict['"]?/, ""));
  file.write(
    "\nmodule.exports = { kata1, kata2, kata3, kata4, kata5, kata6, kata7, kata8, kata9, kata10, kata11, kata12, kata13, kata14, kata15, kata16, kata17, kata18, kata19, kata20, kata21, kata22, kata23  };"
  );
  spawn("mocha", [], { stdio: "inherit" }).on("exit", function(error) {
    if (error) {
      console.log(error);
    }
    exec("rm s.js");
    fs.unlinkSync(filepath);
  });
});
