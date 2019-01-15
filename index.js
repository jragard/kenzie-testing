#!/usr/bin/env node

const fs = require('fs');
const { exec } = require('child_process');
const ArgumentParser = require('argparse').ArgumentParser;
const path = require('path')
const URI = require('urijs')



const parser = new ArgumentParser({
    version: '1.0.0',
    addHelp: true,
    description: 'Kenzie Academy assessment testing tool'
})

parser.addArgument(
    ['assessment'],
    {
        help: 'assessment to be tested'
    }
)

parser.addArgument(
    ['-g', '--gitlink'],
    {
        help: 'Github or Gitlab link to assessment file(s)'
    }
)

// function findStudentFile() {
//     fs.readdirSync(startDir, (err, items) => {
//         items.forEach(item => {
//             if (caseInsensitivePattern.test(item)) {
                
               
//             }
//         });
//     })

// }

const args = parser.parseArgs()
// console.log(__dirname)
// console.log(process.cwd())

const startDir = process.cwd();
// console.log(__filename)

const caseInsensitivePattern = new RegExp(args.assessment, 'i')


fs.readdir(`${__dirname}/Tests`, (err, items) => {
    items.forEach((item) => {
        if (caseInsensitivePattern.test(item)){
            // console.log(process.cwd())
            process.chdir(`${__dirname}/Tests/${item}`)
            const studentFileRelPath = (URI(startDir).relativeTo(`${__dirname}/Tests/${item}`))._string;
            // console.log(studentFileRelPath)
            
            
            
            const arrayOfFiles = fs.readdirSync(startDir)

            arrayOfFiles.forEach(file => {
                if(caseInsensitivePattern.test(file)){
                    let filename = file;
                    let src = path.join(startDir, filename)
                    console.log(src)
                    let studentCode = fs.readFileSync(src, { encoding: "utf8" })

                    console.log(studentCode + 'hey') 

                }
            })

            

            // console.log(findStudentFile())
            

            // This installs all required npm modules and awaits the install before continuing to next exec call
            const installPackages = exec('npm i')
            installPackages.on('exit', () => {
                process.exit
            })

            // 
            // process.chdir(currentDirectory)
            const { gitlink } = args
            exec(`npm run test ${gitlink ? gitlink : ''}`, (error, stdout, stderr) => {
            console.log(stdout)
        })
        }
    })
})


