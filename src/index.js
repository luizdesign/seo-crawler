const puppeteer = require('puppeteer');
const Meta = require('./tags/meta');
const Title = require('./tags/title');
const Link = require('./tags/link');
const Hyperlink = require('./tags/hyperlink');

class Crawler {
    constructor (options) {
        this.options = options;
    }

    init () {
        this.access(this.options.entrypoint);
    }

    async access (url) {
        const browser = await puppeteer.launch({
            headless: true,
        });
        const page = await browser.newPage();

        await page.goto(url);
        await page.addScriptTag({
            content: `${Meta.extract} ${Title.extract} ${Link.extract} ${Hyperlink.extract}`,
        });

        let metadata = await page.evaluate(
            async () => {
                const tags = [];

                tags.push(extractMetatag());
                tags.push(extractTitle());
                tags.push(extractLinkTag());
                tags.push(extractHyperlink());

                return tags;
            }
        );

        console.log(metadata);
        
        await browser.close();
    }
}

module.exports = Crawler;