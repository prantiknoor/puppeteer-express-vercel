const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");
require('dotenv').config()

const openBrowser = async () =>
    await puppeteer.launch({
        headless: true,
        ignoreHTTPSErrors: true,
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath:
            process.env.CHROMIUM_EXECUTABLE_PATH ||
            (await chromium.executablePath),
    });

module.exports = openBrowser;
