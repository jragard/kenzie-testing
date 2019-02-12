#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');
const ArgumentParser = require('argparse').ArgumentParser;
const path = require('path');

const parser = new ArgumentParser({
    version: '1.0.0',
    addHelp: true,
    description: 'Kenzie Academy assessment testing tool'
});

parser.addArgument(
    ['assessment'], {
        help: 'assessment to be tested'
    }
);

parser.addArgument(
    ['-g', '--gitlink'], {
        help: 'Github or Gitlab link to assessment file(s)'
    }
);

console.log('index.js running')

const args = parser.parseArgs();
const userLocalDir = process.cwd();
const argMatchesAssessment = new RegExp(args.assessment, 'i');
const assessmentTests = `${__dirname}/Tests`

fs.readdir(assessmentTests, (err, testDirs) => {
    testDirs.forEach((testDir) => {
        let validTestDir = argMatchesAssessment.test(testDir);

        if (validTestDir) {
            let testLocation = `${assessmentTests}/${testDir}`
            process.chdir(testLocation)

            const filesInUserLocalDir = fs.readdirSync(userLocalDir);
            
            let userLocalFile;

            filesInUserLocalDir.forEach(file => {
                
                let validLocalFile = argMatchesAssessment.test(file);

                if (validLocalFile) {
                    userLocalFile = file
                    let pathToUserFile = path.join(userLocalDir, userLocalFile);

                    const studentCode = fs.readFileSync(pathToUserFile, {
                        encoding: "utf8"
                    });

                    let tempFile = './test/temp.js'
                    let tempFileStream = fs.createWriteStream(tempFile);

                    tempFileStream.write(studentCode.replace(/['"]?use strict['"]?/, ""));
                }
                if (file.includes(".html")) {
                    let htmlFile = file;
                    let pathToHTMLFile = path.join(userLocalDir, htmlFile);

                    const htmlContent = fs.readFileSync(pathToHTMLFile, {
                        encoding: "utf-8"
                    })
                    
                    // For converting user HTML to a temp dom instance to test with jsdom, we might not use this soon
                    let oneLineHTML = htmlContent.replace(/\n|\t/g, '')
                    let tempTXT = './test/temp.txt'
                    let tempTXTStream = fs.createWriteStream(tempTXT);
                    tempTXTStream.write(JSON.stringify(oneLineHTML));
                }
            })

            // This installs all required npm modules and awaits the install before continuing to next exec call
            const installPackages = exec('npm i')
            installPackages.on('exit', () => {
                process.exit
                const {gitlink, assessment} = args
                exec(`node run.js ${gitlink ? gitlink : ''}`, (error, stdout, stderr) => {
                    if(error){
                        console.log(error)
                    }
                    // This code will console log this even if we are testing github/gitlab links, I believe
                    console.log(`Testing ${userLocalFile} in ${userLocalDir}:`)
                    console.log(stdout)
                })
            })

        }
    })
})