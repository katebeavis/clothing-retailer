describe('storeController', function() {
  beforeEach(module('store'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('storeController');
  }));

  it('initialises with a list of items of clothing', function() {
    expect(ctrl.products).toBeDefined();
  });
});