describe('Store', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  it ('has a title', function() {
    expect(browser.getTitle()).toEqual('Clothing Retailer');
  });

  it ('displays items of clothings', function() {
    expect(element.all(by.id('clothing')).get(0).isDisplayed()).toBe(true);
  });

  it ('displays the name of the items', function() {
    expect(element.all(by.id('name')).get(0).getText()).toEqual('Cotton Shorts, Medium Red');
  });

  it ('displays the price of the items', function() {
    expect(element.all(by.id('price')).get(0).getText()).toEqual('£30.00');
  });

  it ('displays the category of the items', function() {
    expect(element.all(by.id('category')).get(0).getText()).toEqual('Women\'s Casualwear');
  });

  it('can sort items by price', function() {
    expect(element.all(by.id('price')).get(0).getText()).toEqual('£30.00');
    element(by.linkText('%')).
    click();
    expect(element.all(by.id('price')).get(0).getText()).toEqual('£19.00');
  });
});