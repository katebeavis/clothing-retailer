app.controller('storeController', function() {

  var items = [
    { name: 'Almond Toe Court Shoes, Patent Black', category: 'Women\'s Footwear', price: 99.00, stock: 5, inStock: true },
    { name: 'Suede Shoes, Blue', category: 'Women\'s Footwear', price: 42.00, stock: 4, inStock: true },
    { name: 'Leather Driver Saddle Loafers, Tan', category: 'Men\'s Footwear', price: 34.00, stock: 12, inStock: true },
    { name: 'Flip Flops, Red', category: 'Men\'s Footwear', price: 219.00, stock: 6, inStock: true },
    { name: 'Flip Flops, Blue', category: 'Men\'s Footwear', price: 19.00, stock: 0, inStock: false, soldOut: true },
    { name: 'Gold Button Cardigan, Black', category: 'Women\'s Casualwear', price: 167.00, stock: 6, inStock: true },
    { name: 'Cotton Shorts, Medium Red', category: 'Women\'s Casualwear', price: 30.00, stock: 5, inStock: true },
    { name: 'Fine Stripe Short Sleeve Shirt, Grey', category: 'Men\'s Casualwear', price: 49.99, stock: 9, inStock: true },
    { name: 'Fine Stripe Short Sleeve Shirt, Green', category: 'Men\'s Casualwear', price: 39.99, stock: 3, inStock: true },
    { name: 'Sharkskin Waistcoat, Charcoal', category: 'Men\'s Casualwear', price: 75.00, stock: 2, inStock: true },
    { name: 'Lightweight Patch Pocket Blazer, Deer', category: 'Men\'s Casualwear', price: 175.00, stock: 1, inStock: true },
    { name: 'Bird Print Dress, Black', category: 'Women\'s Casualwear', price: 270.00, stock: 10, inStock: true },
    { name: 'Mid Twist Cut-Out Dress, Pink', category: 'Women\'s Casualwear', price: 540.00, stock: 5, inStock: true }
  ];

  this.products = items;
  this.basket = [];
  this.basketTotal = 0;
  var fiveVoucherMinSpend = 5;
  var tenVoucherSpend = 50;
  this.errorMessage = false;
  this.voucherError = false;
  this.voucherApplied = false;
  this.femaleFootwear = 'Women\'s Footwear';
  this.maleFootwear = 'Men\'s Footwear';

  this.addToBasket = function(item) {
    if (item.inStock === true) {
    this.basket.push(item);
    this.basketTotal = this.currentbasketTotal();
    }
  };

  this.currentbasketTotal = function() {
    return this.basket.map(function(item) {
      return (item.price);
    }).reduce(function(a, b) {
      return a + b;
    });
  };

  this.applyFiveVoucher = function(basketTotal) {
    if (basketTotal < fiveVoucherMinSpend) {
      this.errorMessage = true;
      throw new Error ();
    } else if (this.voucherApplied === true) {
      this.voucherError = true;
      throw new Error ();
    } else {
      this.basketTotal = basketTotal - 5;
      this.voucherApplied = true;
    }
  };

  this.applyFiftyVoucher = function(basketTotal) {
    if (basketTotal <= tenVoucherSpend) {
      this.errorMessage = true;
      throw new Error ();
    } else if (this.voucherApplied === true) {
      this.voucherError = true;
      throw new Error ();
    } else {
      this.basketTotal = basketTotal - 10;
      this.voucherApplied = true;
    }
  };

  this.applyFifteenVoucher = function(basketTotal) {
    if (basketTotal <= 75 || this.hasFootwear()) {
      this.errorMessage = true;
      throw new Error ();
    } else if (this.voucherApplied === true) {
      throw new Error ();
    } else {
      this.basketTotal = basketTotal - 15;
      this.voucherApplied = true;
    }

    console.log(this.hasFootwear());
    console.log(this.itemCategory());


  };

  this.hasFootwear = function() {
   if (this.itemCategory().indexOf('Footwear') > -1) {
    return false;
   } else {
    return true;
   }
  };

  this.itemCategory = function() {
    return (this.basket.map(function(item) {
      return (item.category.split(' ').pop());
    }));
  };

  // this.hasFootwear = function() {
  //   if (this.basket.map(function(item) {
  //     return (item.category).indexOf(this.allowedCategories) == <1;
  //   }));
  //     console.log(this.hasFootwear());
  // };

});











