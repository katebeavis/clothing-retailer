app.controller('storeController', function($http) {

  var shop = this;

  $http.get('public/products/products.json')
            .then(function(result) {
              shop.products = result.data;
            });

  shop.basket = [];
  shop.basketTotal = 0;
  var fiveVoucherMinSpend = 5;
  var tenVoucherSpend = 50;
  shop.errorMessage = false;
  shop.voucherError = false;
  shop.FiveVoucherApplied = false;
  shop.TenVoucherApplied = false;
  shop.FifteenVoucherApplied = false;
  shop.displayVouchers = false;

  shop.checkBasket = function() {
      shop.displayVouchers = true;
  };

  shop.addToBasket = function(item) {
    if (item.inStock === true) {
    shop.basket.push(item);
    shop.basketTotal = shop.currentbasketTotal();
    shop.checkBasket();
    }
  };

  shop.currentbasketTotal = function() {
    return shop.basket.map(function(item) {
      return (item.price);
    }).reduce(function(a, b) {
      return a + b;
    },0);
  };

  shop.removeFromBasket = function(item) {
    shop.basket.pop(item);
    shop.basketTotal = shop.currentbasketTotal();
  };

  shop.applyFiveVoucher = function(basketTotal) {
    if (basketTotal < fiveVoucherMinSpend) {
      shop.errorMessage = true;
    } else if (shop.FiveVoucherApplied === true) {
      shop.voucherError = true;
    } else {
      shop.basketTotal = basketTotal - 5;
      shop.FiveVoucherApplied = true;
    }
  };

  shop.applyTenVoucher = function(basketTotal) {
    if (basketTotal <= tenVoucherSpend) {
      shop.errorMessage = true;
    } else if (shop.TenVoucherApplied === true) {
      shop.voucherError = true;
    } else {
      shop.basketTotal = basketTotal - 10;
      shop.TenVoucherApplied = true;
    }
  };

  shop.applyFifteenVoucher = function(basketTotal) {
    if (basketTotal <= 75 || shop.hasFootwear()) {
      shop.errorMessage = true;
    } else if (shop.FifteenVoucherApplied === true) {
      shop.voucherError = true;
    } else {
      shop.basketTotal = basketTotal - 15;
      shop.FifteenVoucherApplied = true;
    }
  };

  shop.hasFootwear = function() {
   if (shop.itemCategory().indexOf('Footwear') > -1) {
    return false;
   } else {
    return true;
   }
  };

  shop.itemCategory = function() {
    return (shop.basket.map(function(item) {
      return (item.category.split(' ').pop());
    }));
  };
});