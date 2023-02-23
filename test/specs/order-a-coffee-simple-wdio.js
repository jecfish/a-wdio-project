describe("order-a-coffee-simple", () => {
  it("tests order-a-coffee-simple", async () => {
    await browser.setWindowSize(600, 1041)
    await browser.url("https://coffee-cart.netlify.app/")
    await expect(browser).toHaveUrl("https://coffee-cart.netlify.app/")
    await browser.$("[data-test='Espresso']").click()

    // console.log(browser.sessionId);
    // await browser.debug();
  });
});
