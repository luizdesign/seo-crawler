#!/usr/bin/env node

const program = require('commander');
const arguments = require('shell-arguments');

program.option('-e, --entrypoint', 'set the start url to crawler');
program.parse(process.argv);

const Crawler = require('../src/index.js');
const crawler = new Crawler(arguments);

crawler.init();