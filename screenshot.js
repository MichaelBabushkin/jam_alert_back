const puppeteer = require('puppeteer');

const url = "https://www.haifa-stadium.com/schedule_of_matches_in_the_stadium/";


async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: 'screenshot.png'});
    await browser.close();
}
run();