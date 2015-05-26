describe('Store', function() {
  beforeEach(function() {
    browser.get('http://localhost:3000');
    addButton = element.all(by.css('.add')).get(0);
  });

  it ('has a title', function() {
    expect(browser.getTitle()).toEqual('Clothing Retailer');
  });

  it ('displays the name of the items', function() {
    expect(element.all(by.id('name')).get(0).getText()).toEqual('Almond Toe Court Shoes, Patent Black');
  });

  it ('displays the price of the items', function() {
    expect(element.all(by.id('price')).get(0).getText()).toEqual('£99.00');
  });

  it ('displays the category of the items', function() {
    expect(element.all(by.id('category')).get(0).getText()).toEqual('Women\'s Footwear');
  });

  // NAV BASKET

  it('displays a basket total of 0 when initialised', function() {
    expect(element(by.id('nav-basket')).getText()).toEqual('£0.00');
  });

  it('displays the correct basket total when an item has been added', function() {
    addButton.click();
    expect(element(by.id('nav-basket')).getText()).toEqual('£99.00');
  });

  it('displays the correct basket total when multiple items have been added', function() {
    addButton.click();
    addButton.click();
    expect(element(by.id('nav-basket')).getText()).toEqual('£198.00');
  });

  // BASKET

  it('displays a basket total of 0 when initialised', function() {
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £0.00');
  });

  it('lets a user remove an item from the basket', function() {
    addButton.click();
    element.all(by.css('.remove')).getText().click();
    expect(element(by.id('basket-contents')).isPresent()).toEqual(false);
  });

  it('displays the correct basket total when an item has been added', function() {
    addButton.click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £99.00');
  });

  it('displays the correct basket total when multiple items have been added', function() {
    addButton.click();
    addButton.click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £198.00');
  });

  it('displays the correct basket total when an item has been removed', function() {
    addButton.click();
    element.all(by.css('.remove')).getText().click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £0.00');
  });

  // VOUCHERS

  it('displays the correct total after a £5 voucher has been applied', function() {
    addButton.click();
    element(by.buttonText('£5.00 voucher')).click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £94.00');
  });

  it('displays an error when £5 minimum spend criteria has not been met', function() {
    element.all(by.buttonText('£5.00 voucher')).click();
    expect(element.all(by.css('div.alert')).get(0).isDisplayed()).toBeTruthy();
  });

  it('displays an error when £5 voucher has been used', function() {
    addButton.click();
    element(by.buttonText('£5.00 voucher')).click();
    element(by.buttonText('£5.00 voucher')).click();
    expect(element.all(by.css('div.alert')).get(1).isDisplayed()).toBeTruthy();
  });

  it('displays the correct total after a £10 voucher has been applied', function() {
    addButton.click();
    element(by.buttonText('£10.00 voucher')).click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £89.00');
  });

  it('displays an error when £10 minimum spend criteria has not been met', function() {
    element.all(by.buttonText('£10.00 voucher')).click();
    expect(element.all(by.css('div.alert')).get(0).isDisplayed()).toBeTruthy();
  });

  it('displays an error when £10 voucher has been used', function() {
    element.all(by.css('.add')).get(1).click();
    element(by.buttonText('£10.00 voucher')).click();
    element(by.buttonText('£10.00 voucher')).click();
    expect(element.all(by.css('div.alert')).get(0).isDisplayed()).toBeTruthy();
  });

  it('displays the correct total after a £15 voucher has been applied', function() {
    addButton.click();
    element(by.buttonText('£15.00 voucher')).click();
    expect(element(by.id('basket-total')).getText()).toEqual('Total: £84.00');
  });

  it('displays an error when £15 minimum spend criteria has not been met', function() {
    element.all(by.buttonText('£15.00 voucher')).click();
    expect(element.all(by.css('div.alert')).get(0).isDisplayed()).toBeTruthy();
  });
});