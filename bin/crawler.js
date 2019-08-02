#!/usr/bin/env node

const arguments = require('shell-arguments');
const Crawler = require('../src/index.js');

const crawler = new Crawler(arguments);

crawler.init();