app.controller('storeController', function() {

  var items = [
    { name: 'Almond Toe Court Shoes, Patent Black', category: 'Women\'s Footwear', price: 99.00, stock: 5, inStock: true },
    { name: 'Suede Shoes, Blue', category: 'Women\'s Footwear', price: 42.00, stock: 4, inStock: true },
    { name: 'Leather Driver Saddle Loafers, Tan', category: 'Men\'s Footwear', price: 34.00, stock: 12, inStock: true },
    { name: 'Flip Flops, Red', category: 'Men\'s Footwear', price: 19.00, stock: 6, inStock: true },
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
  console.log(this.basket);

  this.addToBasket = function(item) {
    if (item.inStock === true) {
    this.basket.push(item);
    }
  };

});