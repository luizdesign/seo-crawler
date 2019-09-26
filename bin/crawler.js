#!/usr/bin/env node

const program = require('commander');
const shellArguments = require('shell-arguments');
const Crawler = require('../src/index.js');

program.option('-e, --entrypoint', 'set the start url to crawler');
program.parse(process.argv);

const crawler = new Crawler(shellArguments);

crawler.init();
