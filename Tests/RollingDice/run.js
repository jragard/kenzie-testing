const fs = require('fs');
const axios = require('axios');
const { exec, spawn } = require('child_process');
const { argv } = require('yargs');

const answer = /.*github.com\/(\w*)\/(\w*)[.git]?$/.exec(argv._[0]);

const url = `https://raw.githubusercontent.com/${answer[1]}/${answer[2]}/master/coinObject.js`;