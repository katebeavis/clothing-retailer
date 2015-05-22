describe('storeController', function() {
  beforeEach(module('store'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('storeController');
  }));

  it('initialises with a list of items of clothing', function() {
    expect(ctrl.products).toBeDefined();
  });

  it('has item names', function() {
    expect(ctrl.products[0].name).toEqual('Almond Toe Court Shoes, Patent Black')
  });

  it('has item prices', function() {
    expect(ctrl.products[0].price).toEqual(99.00);
  });

  it('has item categories', function() {
    expect(ctrl.products[0].category).toEqual('Women\'s Footwear');
  });
});