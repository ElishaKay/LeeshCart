// an array with all of our cart items

var items = [
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"},
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"},
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"},
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"},
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"},
  {item: "glass", price: 68, img: "http://ecx.images-amazon.com/images/I/31AOX24ATKL.jpg"}
			];

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

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!

});

var createBook = function (this) {
    if (this.totalItems) {
      var book = {
        title: this.closest() ,
        author: data.items[0].volumeInfo.authors[0],
        description: data.items[0].volumeInfo.description,
        image: data.items[0].volumeInfo.imageLinks.thumbnail,
      }

      var source = $("#book-template").html();
      var template = Handlebars.compile(source);
      var html = template(book);

      $('.book').append(html);


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