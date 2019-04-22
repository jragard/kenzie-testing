#!/usr/bin/env node
'use strict';

const Parser = require('./lib/utils/Parser');
const CommandHandler = require('./lib/utils/CommandHandler');

let args = new Parser();
let commandHandler = new CommandHandler(args);
commandHandler.runCommand();