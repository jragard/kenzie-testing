#!/usr/bin/env node
'use strict';

require('./node_modules/dotenv').config();
const Parser = require('./lib/utils/Parser');
const CommandHandler = require('./lib/utils/CommandHandler');

let args = new Parser();
let commandHandler = new CommandHandler(args);
commandHandler.runCommand();