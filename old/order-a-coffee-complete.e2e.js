describe("order-a-coffee-complete", () => {
  it("tests order-a-coffee-complete", async () => {
    await browser.setWindowSize(448, 768)
    await browser.url("https://coffee-cart.netlify.app/")
    await expect(browser).toHaveUrl("https://coffee-cart.netlify.app/")
    await browser.$("[data-test=Espresso]").click()
    await browser.$("[data-test=Americano]").click()
    await browser.$("[data-test=Mocha]").click({ button: 'right' })
    await browser.$("button=Yes").click()
    await browser.$("h4=Flat White $18.00").doubleClick()
    await browser.$("h4=平白咖啡 $18.00").doubleClick()
    await browser.$("[data-test=Flat_White]").click({ button: 'right' })
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.$("[data-test=checkout]").moveTo()
    await browser.$("button=Add one Espresso").click()
    await browser.$("button=Remove one Mocha").click()
    await expect(browser.$$("div.pay-container li")).toBeElementsArrayOfSize(2)
    await browser.waitUntil(() => (
      browser.execute(() => document.querySelector('div.pay-container li:nth-child(2) span.unit-desc').innerText === ' x 2')
    ))
    await browser.$("[data-test=checkout]").click()
    await browser.$("#name").click()
    await browser.$("#name").setValue("jec")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#email").setValue("jec@doe.com")
    await browser.$("#promotion-label").click()
    await browser.$("#submit-payment").click()
  });
});
