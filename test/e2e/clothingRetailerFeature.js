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
    element(by.linkText('%'))
    .click();
    expect(element.all(by.id('price')).get(0).getText()).toEqual('£19.00');
  });

  it('displays a basket total of 0 when initialised', function() {
    expect(element(by.id('basket')).getText()).toEqual('0');
  });

  it('displays an item in the basket when it has been added', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    expect(element(by.id('basket-contents')).getText()).toEqual('Cotton Shorts, Medium Red');
  });

  it('it displays the correct basket total when an item has been added', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    expect(element(by.id('basket')).getText()).toEqual('30');
  });

  it('it displays the correct basket total when multiple items have been added', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    element.all(by.buttonText('Add to basket')).get(1)
    .click();
    expect(element(by.id('basket')).getText()).toEqual('129');
  });
});