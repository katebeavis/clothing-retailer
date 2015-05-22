describe('Store', function() {
  it ('has a title', function() {
    browser.get('http://localhost:3000')
    expect(browser.getTitle()).toEqual('Clothing Retailer');
  });

  it ('displays items of clothings', function() {
    browser.get('http://localhost:3000')
    expect(element(by.id('clothing')).isDisplayed()).toBe(true);
  });

  it ('displays the name of the items', function() {
    browser.get('http://localhost:3000')
    expect(element(by.id('name')).getText()).toEqual('Almond Toe Court Shoes, Patent Black');
  });

  it ('displays the price of the items', function() {
    browser.get('http://localhost:3000')
    expect(element(by.id('price')).getText()).toEqual('£99.00');
  });

  it ('displays the category of the items', function() {
    browser.get('http://localhost:3000')
    expect(element(by.id('category')).getText()).toEqual('Women\'s Footwear');
  });
});