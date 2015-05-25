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
    ctrl.itemThree = { name: 'Cotton Shorts, Medium Red',
                     category: 'Women\'s Casualwear',
                     price: 30.00,
                     stock: 5,
                     inStock: true };
    ctrl.itemFour = { name: 'Leather Driver Saddle Loafers, Tan',
                      category: 'Men\'s Footwear',
                      price: 34.00,
                      stock: 12,
                      inStock: true
                    };
    ctrl.itemTest = { price: 1
                    };
    }));

  xit('initialises with a list of items of clothing', function() {
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

  it('can set the basket total to the correct amount', function() {
    ctrl.addToBasket(ctrl.itemOne);
    expect(ctrl.basketTotal).toEqual(99.00);
  });

  it('can set the basket total to the correct amount when multiple items are added', function() {
    ctrl.addToBasket(ctrl.itemOne);
    ctrl.addToBasket(ctrl.itemThree);
    expect(ctrl.basketTotal).toEqual(129.00);
  });

  it('can apply a £5 voucher to the order', function() {
    ctrl.addToBasket(ctrl.itemOne);
    ctrl.applyFiveVoucher(ctrl.basketTotal);
    expect(ctrl.basketTotal).toEqual(94.00);
  });

  it('cannot apply a £5 voucher if the total is not more than £5', function() {
    ctrl.addToBasket(ctrl.itemTest);
    ctrl.applyFiveVoucher(ctrl.basketTotal);
    expect(ctrl.errorMessage).toEqual(true);
  });

  it('will only let a £5 voucher be applied once', function() {
    ctrl.addToBasket(ctrl.itemOne);
    ctrl.applyFiveVoucher(ctrl.basketTotal);
    ctrl.applyFiveVoucher(ctrl.basketTotal);
    expect(ctrl.voucherError).toEqual(true);
  });

  it('can apply a £10 voucher when more than £50 has been spent', function() {
    ctrl.addToBasket(ctrl.itemOne);
    ctrl.applyTenVoucher(ctrl.basketTotal);
    expect(ctrl.basketTotal).toEqual(89.00);
  });

  it('cannot apply a £10 voucher if the total is not more than £50', function() {
    ctrl.addToBasket(ctrl.itemTwo);
    ctrl.applyTenVoucher(ctrl.basketTotal);
    expect(ctrl.errorMessage).toEqual(true);
  });

  it('will only let a £10 voucher be applied once', function() {
    ctrl.addToBasket(ctrl.itemOne);
    ctrl.applyTenVoucher(ctrl.basketTotal);
    ctrl.applyTenVoucher(ctrl.basketTotal);
    expect(ctrl.voucherError).toEqual(true);
  });

  it('can apply a £15 voucher to the order', function() {
    ctrl.addToBasket(ctrl.itemOne);
    ctrl.applyFifteenVoucher(ctrl.basketTotal);
    expect(ctrl.basketTotal).toEqual(84.00);
  });

  it('cannot apply a £15 voucher if the total is not more than £75', function() {
    ctrl.addToBasket(ctrl.itemThree);
    ctrl.applyFifteenVoucher(ctrl.basketTotal);
    expect(ctrl.errorMessage).toEqual(true);
  });

  it('cannot apply a £15 voucher if the category is not footwear', function() {
    ctrl.addToBasket(ctrl.itemThree);
    ctrl.addToBasket(ctrl.itemFour);
    ctrl.applyFifteenVoucher(ctrl.basketTotal);
    expect(ctrl.errorMessage).toEqual(true);
  });

  it('will only let a £15 voucher be applied once', function() {
    ctrl.addToBasket(ctrl.itemOne);
    ctrl.applyFifteenVoucher(ctrl.basketTotal);
    ctrl.applyFifteenVoucher(ctrl.basketTotal);
    expect(ctrl.voucherError).toEqual(true);
  });
});