describe('storeController', function() {
  beforeEach(module('store'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('storeController');
    ctrl.itemOne = { name: 'Almond Toe Court Shoes, Patent Black',
                     category: 'Women\'s Footwear',
                     price: 99.00,
                     stock: 5,
                     inStock: true
                   };
    ctrl.itemTwo = { name: 'Flip Flops, Blue',
                     category: 'Men\'s Footwear',
                     price: 19.00,
                     stock: 0,
                     inStock: false,
                     soldOut: true };
    }));

  it('initialises with a list of items of clothing', function() {
    expect(ctrl.products).toBeDefined();
  });

  it('has item names', function() {
    expect(ctrl.itemOne.name).toEqual('Almond Toe Court Shoes, Patent Black');
  });

  it('has item prices', function() {
    expect(ctrl.itemOne.price).toEqual(99.00);
  });

  it('has item categories', function() {
    expect(ctrl.itemOne.category).toEqual('Women\'s Footwear');
  });

  it('has an in stock option', function() {
    expect(ctrl.itemOne.inStock).toEqual(true);
  });

  it('initialises with an empty basket', function() {
    expect(ctrl.basket).toEqual([]);
  });

  it('initialises with a basket total of 0', function() {
    expect(ctrl.basketTotal).toEqual(0);
  });

  it('can add an item to the basket', function() {
    ctrl.addToBasket(ctrl.itemOne);
    expect(ctrl.basket).toEqual([ctrl.itemOne]);
  });
});