const fs = require('fs');
const axios = require('axios');
const { exec, spawn } = require('child_process');
const { argv } = require('yargs');

const answer = /.*github.com\/(\w*)\/(\w*)[.git]?$/.exec(argv._[0]);

const url = `https://raw.githubusercontent.com/${answer[1]}/${answer[2]}/master/coinObject.js`;
const htmlUrl = `https://raw.githubusercontent.com/${answer[1]}/${answer[2]}/master/index.html`;

const file = fs.createWriteStream('coinObject.js');

file.write("let jsdom = require('jsdom').JSDOM\n")

function asyncFunction(response, callback) {
    file.write('let html = ' + JSON.stringify(response.data) + "\n")
    callback()
}

axios.get(htmlUrl)
    .then(response => {
        asyncFunction(response, function() {
            file.write("dom = new jsdom(html)\n")
            file.write("window = dom.window\n")
            file.write("document = window.document\n")

            axios.get(url)
                .then(response => {
                    file.write(response.data.replace(/use ['"]?strict['"]?/, ''));
                    file.write('\nmodule.exports = { coin, display20Flips, display20Images, dom };');
        
                    spawn('mocha', ['test.js'], {stdio: 'inherit'})
                        .on('exit', function (error) {
                        if (error) {
                        console.log(error);
                    }
                        exec('rm coinObject.js');
        });
    });
        })
    })