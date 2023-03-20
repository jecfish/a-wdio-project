describe("order-a-coffee-simple", () => {
  it("tests order-a-coffee-simple", async () => {

    // Monitor console messages
    // Enable BiDi config -> capabilities -> webSocketUrl: true
    await browser.send({
      method: 'session.subscribe',
      params: { events: ['log.entryAdded'] }
    });
    
    browser.on('message', (data) => {
      const {params} = JSON.parse(data);
      if (params?.level != 'error') return;
      console.log('RECEIVED: %s', params?.text);
    });

    // Action
    await browser.setWindowSize(600, 1041);
    await browser.url("https://coffee-cart.app/?breakable=1");
    await browser.$("[data-test='Espresso']").click();

    // Assert
    const checkout = await browser.$('[data-test="checkout"]');
    await expect(checkout).toHaveText('Total: $10.00');
  });
});
