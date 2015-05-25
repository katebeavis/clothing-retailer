describe('storeController', function() {
  beforeEach(module('store'));

  var ctrl, $httpBackend;

  beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('./public/products/products.json').
          respond([{ name: 'Almond Toe Court Shoes, Patent Black',
                     category: 'Women\'s Footwear',
                     price: 99.00,
                     stock: 5,
                     inStock: true
                   },
                   {name: 'Flip Flops, Blue',
                     category: 'Men\'s Footwear',
                     price: 19.00,
                     stock: 0,
                     inStock: false,
                     soldOut: true
                   },
                   { name: 'Cotton Shorts, Medium Red',
                     category: 'Women\'s Casualwear',
                     price: 30.00,
                     stock: 5,
                     inStock: true
                   }
                  ]);
    $scope = $rootScope.$new();
    ctrl = $controller('storeController', {$scope: $scope});
  }));

  it('initialises with an empty basket', function() {
    expect(ctrl.basket).toEqual([]);
  });

  it('initialises with a basket total of 0', function() {
    expect(ctrl.basketTotal).toEqual(0);
  });

  it('can add an item to the basket', function() {
    $httpBackend.flush();
    ctrl.addToBasket(0);
    expect(ctrl.basket.length).toEqual(1);
  });

  // it('can set the basket total to the correct amount', function() {
  //   ctrl.addToBasket(ctrl.itemOne);
  //   expect(ctrl.basketTotal).toEqual(99.00);
  // });

  // it('can set the basket total to the correct amount when multiple items are added', function() {
  //   ctrl.addToBasket(ctrl.itemOne);
  //   ctrl.addToBasket(ctrl.itemThree);
  //   expect(ctrl.basketTotal).toEqual(129.00);
  // });

  // it('can apply a £5 voucher to the order', function() {
  //   ctrl.addToBasket(ctrl.itemOne);
  //   ctrl.applyFiveVoucher(ctrl.basketTotal);
  //   expect(ctrl.basketTotal).toEqual(94.00);
  // });

  // it('cannot apply a £5 voucher if the total is not more than £5', function() {
  //   ctrl.addToBasket(ctrl.itemTest);
  //   ctrl.applyFiveVoucher(ctrl.basketTotal);
  //   expect(ctrl.errorMessage).toEqual(true);
  // });

  // it('will only let a £5 voucher be applied once', function() {
  //   ctrl.addToBasket(ctrl.itemOne);
  //   ctrl.applyFiveVoucher(ctrl.basketTotal);
  //   ctrl.applyFiveVoucher(ctrl.basketTotal);
  //   expect(ctrl.voucherError).toEqual(true);
  // });

  // it('can apply a £10 voucher when more than £50 has been spent', function() {
  //   ctrl.addToBasket(ctrl.itemOne);
  //   ctrl.applyTenVoucher(ctrl.basketTotal);
  //   expect(ctrl.basketTotal).toEqual(89.00);
  // });

  // it('cannot apply a £10 voucher if the total is not more than £50', function() {
  //   ctrl.addToBasket(ctrl.itemTwo);
  //   ctrl.applyTenVoucher(ctrl.basketTotal);
  //   expect(ctrl.errorMessage).toEqual(true);
  // });

  // it('will only let a £10 voucher be applied once', function() {
  //   ctrl.addToBasket(ctrl.itemOne);
  //   ctrl.applyTenVoucher(ctrl.basketTotal);
  //   ctrl.applyTenVoucher(ctrl.basketTotal);
  //   expect(ctrl.voucherError).toEqual(true);
  // });

  // it('can apply a £15 voucher to the order', function() {
  //   ctrl.addToBasket(ctrl.itemOne);
  //   ctrl.applyFifteenVoucher(ctrl.basketTotal);
  //   expect(ctrl.basketTotal).toEqual(84.00);
  // });

  // it('cannot apply a £15 voucher if the total is not more than £75', function() {
  //   ctrl.addToBasket(ctrl.itemThree);
  //   ctrl.applyFifteenVoucher(ctrl.basketTotal);
  //   expect(ctrl.errorMessage).toEqual(true);
  // });

  // it('cannot apply a £15 voucher if the category is not footwear', function() {
  //   ctrl.addToBasket(ctrl.itemThree);
  //   ctrl.addToBasket(ctrl.itemFour);
  //   ctrl.applyFifteenVoucher(ctrl.basketTotal);
  //   expect(ctrl.errorMessage).toEqual(true);
  // });

  // it('will only let a £15 voucher be applied once', function() {
  //   ctrl.addToBasket(ctrl.itemOne);
  //   ctrl.applyFifteenVoucher(ctrl.basketTotal);
  //   ctrl.applyFifteenVoucher(ctrl.basketTotal);
  //   expect(ctrl.voucherError).toEqual(true);
  // });
});