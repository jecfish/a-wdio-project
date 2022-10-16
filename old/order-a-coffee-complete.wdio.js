describe("order-a-coffee-complete", () => {
  it("tests order-a-coffee-complete", async () => {
    await browser.setWindowSize(448, 768)
    await browser.url("https://coffee-cart.netlify.app/")
    await expect(browser).toHaveUrl("https://coffee-cart.netlify.app/")
    await browser.$("[data-test=Espresso]").click()
    await browser.$("[data-test=Americano]").click()
    await browser.$("[data-test=Mocha]").click({ button: 'right' })
    await browser.$("[data-cy=add-to-cart-modal] > form > button:nth-child(1)").click()
    await browser.$("#app > div:nth-child(4) > ul > li:nth-child(5) > h4").doubleClick()
    await browser.$("#app > div:nth-child(4) > ul > li:nth-child(5) > h4").doubleClick()
    await browser.$("[data-test=Flat_White]").click({ button: 'right' })
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: 'ESCAPE' }]
    }])
    await browser.$("[data-test=checkout]").moveTo()
    await browser.$("#app > div:nth-child(4) > div.pay-container > ul > li:nth-child(2) > div.unit-controller > button:nth-child(1)").click()
    await browser.$("#app > div:nth-child(4) > div.pay-container > ul > li:nth-child(3) > div.unit-controller > button:nth-child(2)").click()
    await browser.$("div.pay-container li").waitForExist()
    await expect(browser.$("div.pay-container li")).toBeElementsArrayOfSize(2)
    await browser.executeAsync(async () => document.querySelector('div.pay-container li:nth-child(2) span.unit-desc').innerText === ' x 2')
    await browser.$("[data-test=checkout]").click()
    await browser.$("#name").click()
    await browser.$("#name").setValue("jec")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: 'TAB' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: 'TAB' }]
    }])
    await browser.$("#email").setValue("jec@doe.com")
    await browser.$("#promotion-label").click()
    await browser.$("#submit-payment").click()
  });
});
