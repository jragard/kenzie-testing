#!/usr/bin/env node

const fs = require('fs');
const {
    exec
} = require('child_process');
const ArgumentParser = require('argparse').ArgumentParser;
const path = require('path')

const parser = new ArgumentParser({
    version: '1.0.0',
    addHelp: true,
    description: 'Kenzie Academy assessment testing tool'
})

parser.addArgument(
    ['assessment'], {
        help: 'assessment to be tested'
    }
)

parser.addArgument(
    ['-g', '--gitlink'], {
        help: 'Github or Gitlab link to assessment file(s)'
    }
)

const args = parser.parseArgs()

const startDir = process.cwd();

const caseInsensitivePattern = new RegExp(args.assessment, 'i')

fs.readdir(`${__dirname}/Tests`, (err, items) => {
    items.forEach((item) => {
        if (caseInsensitivePattern.test(item)) {
            
            process.chdir(`${__dirname}/Tests/${item}`)
            
            
            const arrayOfFiles = fs.readdirSync(startDir)

            arrayOfFiles.forEach(file => {
                if (caseInsensitivePattern.test(file)) {
                    let filename = file;
                    let src = path.join(startDir, filename)
                    console.log(src)
                    const studentCode = fs.readFileSync(src, {
                        encoding: "utf8"
                    })
                    let tempFile = '../../temp.js'
                    fs.appendFile(tempFile, studentCode, (err) => {
                        if(err){
                            console.log(err)
                        }
                    })
                }
            })

            // This installs all required npm modules and awaits the install before continuing to next exec call
            const installPackages = exec('npm i')
            installPackages.on('exit', () => {
                process.exit
                const {
                    gitlink
                } = args
                exec(`npm run test ${gitlink ? gitlink : ''}`, (error, stdout, stderr) => {
                    if(error){
                        console.log(error)
                    }
                    console.log(stdout)
                    exec('rm ../../temp.js')
                })
            })

        }
    })
})