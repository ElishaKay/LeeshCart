// an array with all of our cart items

var items = [
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"},
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"},
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"},
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"},
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"},
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"}
			];

//Handlebars

$('.view-cart').on('click', function (e) {
	e.preventDefault();
	console.log("view cart button clicked")

  // TODO: hide/show the shopping cart!
  var source = $("#cart-template").html();
  var template = Handlebars.compile(source);
  var html = template(items); //name of the array to cycle through

  $('.addedtocart').append(html);
});


var cart = [
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"}
];

var updateCart = function () {
  // TODO: finish
}


var addItem = function (item) {
  // TODO: finish
}

var clearCart = function () {
  // TODO: finish
}





$('.add-to-cart').on('click', function (e) {
  e.preventDefault();



  // TODO: get the "item" object from the page
  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();