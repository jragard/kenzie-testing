const ArgumentParser = require('argparse').ArgumentParser;

class Parser {
    constructor(){
        let args = this.parseArgs();
        this.command = args[0].command.toLowerCase();
        this.subCommand = args[1][0].toString().toLowerCase();
        this.options = {filePath: args[0].filepath, gitRepo: args[0].gitlink, webpageUrl: args[0].gitpage};
    }

    parseArgs(){
        const parser = new ArgumentParser({
            version: '1.0.0',
            addHelp: true,
            description: 'Kenzie Academy assessment testing tool',

        });

        parser.addArgument(
            ['command'],{
                help: 'grade or help'
            }
        );

        let optionalArguments = parser.addArgumentGroup({
            title: 'optional arguments'
        });

        optionalArguments.addArgument(
            ['-f', '--filepath'],{
                help: 'Manually set the files path'
            }
        );

        optionalArguments.addArgument(
            ['-g', '--gitlink'], {
                help: 'Github or Gitlab link to assessment file(s)'
            }
        );

        optionalArguments.addArgument(['-p', '--gitpage'], {
                help: 'Gitlab Pages link, or url to hosted webpage to test.'
            }
        );

        return parser.parseKnownArgs();
    }
}


module.exports = Parser;