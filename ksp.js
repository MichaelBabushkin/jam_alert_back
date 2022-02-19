const puppeteer = require('puppeteer');

const url = "https://ksp.co.il/web/item/188727/";

async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.waitForSelector('#product-page-root :nth-child(4)> div:nth-of-type(2)>div:nth-of-type(3)>div:nth-of-type(1)')
    let element = await page.$('#product-page-root :nth-child(4)> div:nth-of-type(2)>div:nth-of-type(3)>div:nth-of-type(1)')
    let value = await page.evaluate(el => el.textContent, element)

        console.log( value);

    await browser.close();
}
run ();