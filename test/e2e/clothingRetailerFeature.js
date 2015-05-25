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

  // NAV BASKET

  it('displays a basket total of 0 when initialised', function() {
    expect(element(by.id('nav-basket')).getText()).toEqual('£0.00');
  });

  it('displays the correct basket total when an item has been added', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    expect(element(by.id('nav-basket')).getText()).toEqual('£30.00');
  });

  it('displays the correct basket total when multiple items have been added', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    element.all(by.buttonText('Add to basket')).get(1)
    .click();
    expect(element(by.id('nav-basket')).getText()).toEqual('£129.00');
  });

  // BASKET

  it('displays a basket total of 0 when initialised', function() {
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £0.00');
  });

  it('displays an item in the basket when it has been added', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    expect(element(by.id('basket-contents')).getText()).toEqual('Cotton Shorts, Medium Red');
  });

  it('lets a user remove an item from the basket', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    element.all(by.css('.remove')).getText()
    .click();
    expect(element(by.id('basket-contents')).isPresent()).toEqual(false);
  });

  it('displays the correct basket total when an item has been added', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £30.00');
  });

  it('displays the correct basket total when multiple items have been added', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    element.all(by.buttonText('Add to basket')).get(1)
    .click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £129.00');
  });

  it('displays the correct basket total when an item has been removed', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    element.all(by.css('.remove')).getText()
    .click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £0.00');
  });

  // VOUCHERS

  it('displays the correct total after a £5 voucher has been applied', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    element(by.buttonText('£5.00 voucher'))
    .click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £25.00');
  });

  it('displays an error when £5 minimum spend criteria has not been met', function() {
    element.all(by.buttonText('£5.00 voucher'))
    .click();
    expect(element.all(by.css('div.alert')).get(0).isDisplayed()).toBeTruthy();
  });

  it('displays an error when £5 voucher has been used', function() {
    element.all(by.buttonText('Add to basket')).get(0)
    .click();
    element(by.buttonText('£5.00 voucher'))
    .click();
    element(by.buttonText('£5.00 voucher'))
    .click();
    expect(element.all(by.css('div.alert')).get(1).isDisplayed()).toBeTruthy();
  });

  it('displays the correct total after a £10 voucher has been applied', function() {
    element.all(by.buttonText('Add to basket')).get(1)
    .click();
    element(by.buttonText('£10.00 voucher'))
    .click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £89.00');
  });

  it('displays an error when £10 minimum spend criteria has not been met', function() {
    element.all(by.buttonText('£10.00 voucher'))
    .click();
    expect(element.all(by.css('div.alert')).get(0).isDisplayed()).toBeTruthy();
  });

  it('displays an error when £10 voucher has been used', function() {
    element.all(by.buttonText('Add to basket')).get(1)
    .click();
    element(by.buttonText('£10.00 voucher'))
    .click();
    element(by.buttonText('£10.00 voucher'))
    .click();
    expect(element.all(by.css('div.alert')).get(1).isDisplayed()).toBeTruthy();
  });

  it('displays the correct total after a £15 voucher has been applied', function() {
    element.all(by.buttonText('Add to basket')).get(1)
    .click();
    element(by.buttonText('£15.00 voucher'))
    .click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £84.00');
  });

  it('displays an error when £15 minimum spend criteria has not been met', function() {
    element.all(by.buttonText('£15.00 voucher'))
    .click();
    expect(element.all(by.css('div.alert')).get(0).isDisplayed()).toBeTruthy();
  });
});