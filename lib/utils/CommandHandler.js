const {rreadDir: readDir} = require("./rreadDir");

class CommandHandler {
  constructor(args) {
    this.args = args;
    this.commands = ["grade"];
  }

  async runCommand() {
    let command = await this.getFullCommand();
    await command.run(this.args);
   return command;
  }

  async getFullCommand() {
    if (!this.isCommand(this.args.command))
      return console.log(`Sorry ${
        this.args.command
      } isn't a command, please try one of the following commands instead.
${this.commands.join("\n")}`);

    let subCommands = await this.getAllSubCommands(this.args.command);

    if (!subCommands) return;

    let subCommand = this.getSubCommand(this.args.subCommand, subCommands);
    if (!subCommand)
      return console.log(`Sorry ${
        this.args.subCommand
      } isn't a sub command, please try one of the following sub commands instead.
${subCommands.map(s => s.name).join("\n")}`);

    return subCommand;
  }

  isCommand(command) {
    return this.commands.includes(command);
  }

  async getAllSubCommands(command) {
    let allSubCommands = [];
    let subCommandFiles = await readDir(
      `${__dirname}/../subCommands/${command}`
    );
    if (subCommandFiles.length <= 0) {
      console.log("No sub commands found");
      return false;
    }
    subCommandFiles.filter(f => f.split(".").pop() === "js");
    subCommandFiles.forEach(f => {
      const props = require(f);
      if (props.help.name) {
        allSubCommands.push(props);
      }
    });
    if (!allSubCommands) console.log("No sub commands found");
    return allSubCommands;
  }

  getSubCommand(subCommand, subCommands) {
    return subCommands.find(sc => {
      if (sc.help.name === subCommand) return sc;
      if (sc.help.aliases && sc.help.aliases.includes(subCommand)) return sc;
    });
  }
}

module.exports = CommandHandler;
