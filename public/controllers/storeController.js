app.controller('storeController', ['$http', '$scope', function($http, $scope) {

  $http.get('./public/products/products.json').success(function(data) { $scope.products = data; console.log($scope.products) })
                                              .error(function() {
                                                  //Error
                                                  alert('error/failed');
                                              });


  //   var items =  [
  //   {"name": "Almond Toe Court Shoes, Patent Black",
  //   "category": "Women's Footwear",
  //   "price": 99.00,
  //   "stock": 5,
  //   "inStock": true

  // }];
  // $scope.products = items;
  $scope.basket = [];
  $scope.basketTotal = 0;
  var fiveVoucherMinSpend = 5;
  var tenVoucherSpend = 50;
  $scope.errorMessage = false;
  $scope.voucherError = false;
  $scope.voucherApplied = false;
  console.log($scope.products)



  $scope.addToBasket = function(item) {
    if (item.inStock === true) {
    $scope.basket.push(item);
    $scope.basketTotal = $scope.currentbasketTotal();
    }
  };

  $scope.currentbasketTotal = function() {
    return $scope.basket.map(function(item) {
      return (item.price);
    }).reduce(function(a, b) {
      return a + b;
    });
  };

  $scope.applyFiveVoucher = function(basketTotal) {
    if (basketTotal < fiveVoucherMinSpend) {
      $scope.errorMessage = true;
    } else if ($scope.voucherApplied === true) {
      $scope.voucherError = true;
    } else {
      $scope.basketTotal = basketTotal - 5;
      $scope.voucherApplied = true;
    }
  };

  $scope.applyTenVoucher = function(basketTotal) {
    if (basketTotal <= tenVoucherSpend) {
      $scope.errorMessage = true;
    } else if ($scope.voucherApplied === true) {
      $scope.voucherError = true;
    } else {
      $scope.basketTotal = basketTotal - 10;
      $scope.voucherApplied = true;
    }
  };

  $scope.applyFifteenVoucher = function(basketTotal) {
    if (basketTotal <= 75 || $scope.hasFootwear()) {
      $scope.errorMessage = true;
    } else if ($scope.voucherApplied === true) {
      $scope.voucherError = true;
    } else {
      $scope.basketTotal = basketTotal - 15;
      $scope.voucherApplied = true;
    }
  };

  $scope.hasFootwear = function() {
   if ($scope.itemCategory().indexOf('Footwear') > -1) {
    return false;
   } else {
    return true;
   }
  };

  $scope.itemCategory = function() {
    return ($scope.basket.map(function(item) {
      return (item.category.split(' ').pop());
    }));
  };

}]);











