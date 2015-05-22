describe('Store', function() {
  it ('has a title', function() {
    browser.get('http://localhost:3000')
    expect(browser.getTitle()).toEqual('Clothing Retailer');
  });

  it ('displays items of clothings', function() {
    browser.get('http://localhost:3000')
    expect(element(by.id('clothing')).isDisplayed()).toBe(true);
  });

});