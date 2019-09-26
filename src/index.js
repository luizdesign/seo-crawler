/* global extractMetatag, extractTitle, extractLinkTag, extractHyperlink */

const puppeteer = require('puppeteer');
const Meta = require('./tags/meta');
const Title = require('./tags/title');
const Link = require('./tags/link');
const Hyperlink = require('./tags/hyperlink');

class Crawler {
  constructor(options) {
    this.options = options;
  }

  init() {
    this.access();
  }

  async access() {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();

    await page.goto(this.options.entrypoint);
    await page.addScriptTag({
      content: `${Meta.extract} ${Title.extract} ${Link.extract} ${Hyperlink.extract}`,
    });

    const metadata = await page.evaluate(
      async () => {
        const tags = [];

        tags.push(extractMetatag());
        tags.push(extractTitle());
        tags.push(extractLinkTag());
        tags.push(extractHyperlink());

        return tags;
      },
    );

    console.log(metadata);

    await browser.close();
  }
}

module.exports = Crawler;
