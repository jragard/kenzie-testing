const { expect } = require("chai");
const CommandHandler = require("../lib/utils/CommandHandler");

const validCommandArgs1 = {
  command: "grade",
  subCommand: "katas1",
  options: { filePath: null, gitRepo: null, webpageUrl: null }
};
const validCommandArgs2 = {
  command: "grade",
  subCommand: "katas2",
  options: { filePath: null, gitRepo: null, webpageUrl: null }
};
const workingTests = ["anagrams1", "katas1", "katas2"];

describe("isCommand", () => {
  describe("should check that the command argument is a valid command", () => {
    const CmdHndl = new CommandHandler(validCommandArgs1);
    it("should return true when given 'grade' or 'Grade' as a command", () => {
      expect(CmdHndl.isCommand("grade")).to.equal(true);
      expect(CmdHndl.isCommand("Grade")).to.equal(true);
    });
    it("should return false when given anything else as a command", () => {
      expect(CmdHndl.isCommand("grape")).to.equal(false);
      expect(CmdHndl.isCommand("Grader")).to.equal(false);
      expect(CmdHndl.isCommand("test")).to.equal(false);
      expect(CmdHndl.isCommand("testing")).to.equal(false);
      expect(CmdHndl.isCommand("something")).to.equal(false);
    });
  });
});

describe("getSubCommand", () => {
  describe("Should return the function for the sub command", () => {
    const CmdHndl = new CommandHandler(validCommandArgs1);
    it("Should return the function for katas1 using help.name", async () => {
      let subCommands = await CmdHndl.getAllSubCommands("grade");
      if (!subCommands) return;
      let subCommand = CmdHndl.getSubCommand("katas1", subCommands);
      await expect([
        subCommand.help.name,
        ...subCommand.help.aliases
      ]).to.include("katas1");
    });
    it("Should return the function for katas1 using help.aliases", async () => {
      let subCommands = await CmdHndl.getAllSubCommands("grade");
      if (!subCommands) return;
      let subCommand = CmdHndl.getSubCommand("ktas1", subCommands);
      await expect([
        subCommand.help.name,
        ...subCommand.help.aliases
      ]).to.include("ktas1");
      subCommand = CmdHndl.getSubCommand("katas-1", subCommands);
      await expect([
        subCommand.help.name,
        ...subCommand.help.aliases
      ]).to.include("katas-1");
    });
  });
});

