const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        automationProtocol: 'devtools',
        capabilities: {
            browserName: 'chrome'
        }
    })

    // WebDriver command
    await browser.url('https://webdriver.io')

    // get <Puppeteer.Browser> instance (https://pptr.dev/#?product=Puppeteer&version=v5.2.1&show=api-class-browser)
    const puppeteer = await browser.getPuppeteer()

    // switch to Puppeteer to intercept requests
    const page = (await puppeteer.pages())[0]
    await page.setRequestInterception(true)
    page.on('request', interceptedRequest => {
        if (interceptedRequest.url().endsWith('webdriverio.png')) {
            return interceptedRequest.continue({
                url: 'https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png'
            })
        }

        interceptedRequest.continue()
    })

    // continue with WebDriver commands
    await browser.refresh()
    await browser.pause(2000)

    await browser.deleteSession()
})()