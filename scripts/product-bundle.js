(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = products = [
  {
    name : 'Vogner Char-King',
    price : 499.99,
    rating : 3.5,
    description : 'Turn the heat up with the Vogner Char King. With a full size grill and fine grain heat controls, the Vogner Char King takes your barbecuing to the next level.',
    image : 'img/vogner-char-king.jpg',
    tags : ['grill', 'Char-King']
  },
  {
    name : 'Char-King Imperiale',
    price: 699.99,
    rating : 5,
    description : 'Our flagship grill, the Char-King Imperiale provides the best grilling experience you can achieve. Fully outfitted with Char-King\'s famous Accu-Heat™ Technology, Gas Stream™ burners and mult-layer grill, the Char-King Imperiale is the official State Grill of Texas.',
    image : 'img/char-king-imperiale.jpg',
    tags : ['grill', 'Char-King']
  },
  {
    name : 'Vogner Citizen',
    price : 399.99,
    rating : 4,
    description : 'The Vogner Citizen may be our entry level propane grill, but don\'t be fooled! The Vogner Citizen still cooks your meat thoroughly and cleanly, leaving you with the taste of your meat, not the heat you cooked it with.',
    image : 'img/vogner-citizen.jpg',
    tags : ['grill']
  },
  {
    name : 'Propane Tank',
    price : 24.99,
    rating : 4.5,
    description : 'Buy a full 20 lb. tank of clean burning propane',
    image : 'img/new-tank.jpg',
    tags : ['propane']
  },
  {
    name : 'Strickland Basics: Tongs',
    price : 7.95,
    rating : 2.9,
    description : 'Flip burgers in style with our starter tongs. Comes free with the Vogner Citizen.',
    image : 'img/basic-tongs.jpg',
    tags: ['basics', 'accessories']
  },
  {
    name : 'Premium Tongs',
    price : 17.55,
    rating : 3.8,
    description : 'Take your grill set up a notch with this Premium tongs. Made with Space Age polymers!',
    image : 'img/premium-tongs.jpg',
    tags : ['premium', 'accessories']
  },
  {
    name : 'Strickland Basics: Grill Brush',
    price : 8.25,
    rating : 3.7,
    description : 'Keep your grill clean with our starter brush.',
    image : 'img/basic-brush.jpg',
    tags : ['basics', 'accessories']
  },
  {
    name : 'Premium Grill Brush',
    price : 18.99,
    rating : 3.2,
    description : 'Keeping your grill clean shouldn\'t doesn\'t need to feel like a dirty job with our Premium Grill Brush. Decorated with the lone star, this brush makes cleaning your grill an act of Texas pride!',
    image : 'img/premium-brush.jpg',
    tags : ['premium', 'accessories']
  }
]

},{}],2:[function(require,module,exports){
document.addEventListener("DOMContentLoaded", main);

/*
 *  The event handler for DOMContentLoaded
 */
function main() {
  const products = require("./product-list"); // list of all products
  render({products : products});
}

/*
 *  Parameters: Object tags
 *  Return:     Void
 *
 *  Builds the list of products based on the program state. Calls seperate
 *  function for rendering tags and price range buttons.
 */
function render(state /*{priceRange, tag}*/) {
  // debugger;

  const productsHTML = document.getElementById("products"); // product spot

  destroy(productsHTML);
  renderFilters(state);

  for (let i = 0; i < state.products.length; i++) { // loop over products
    let match = true; // if `match`, the product will display

    // if a tag was passed, and it doesn't match any current product tags...
    if (state.tag !== undefined && !products[i].tags.includes(state.tag))
      match = false;

    if (state.priceRange !== undefined) { //...otherwise...
      if (state.products[i].price < state.priceRange.low) // price min
        match = false;
      else if (state.products[i].price > state.priceRange.high) // price max
        match = false;
    }

    if (state.minRating !== undefined) {
      if (state.products[i].rating < state.minRating) match = false;
    }

    if (match) {                                          // start building...
      let product = document.createElement("div");        // full product area
      let imageCol = document.createElement("div");       // image column
      let infoCol = document.createElement("div");        // info column
      let image = document.createElement("img");          // the product image
      let title = document.createElement("h2");           // the product title
      let price = document.createElement("span");         // price
      let ratingLabel = document.createElement("strong"); // rating label
      let rating = getRatingStars(products[i].rating);    // rating stars
      let description = document.createElement("p");      // product description

      product.classList.add("row");   // A row containing all product info
      imageCol.classList.add("col");  // a col of product
      imageCol.classList.add("m4");   // col width — 1/3

      infoCol.classList.add("col");   // the other col of product
      infoCol.classList.add("m8");    // col width — 2/3

      image.setAttribute("src", products[i].image); // set current product image
      imageCol.appendChild(image);                  // add node to image column

      title.innerText = products[i].name;   // add current product name to title
      infoCol.appendChild(title);           // add node to info column

      price.innerText = "$" + products[i].price;  // add a $ and then curr price
      infoCol.appendChild(price);                 // add node to info column

      infoCol.appendChild(document.createElement("br"));    // line break

      ratingLabel.innerText = "Rating";
      rating.insertBefore(ratingLabel, rating.children[0]); // before stars
      infoCol.appendChild(rating);

      description.innerText = products[i].description;  // add curr description
      infoCol.appendChild(description);                 // add node to info col

      product.appendChild(imageCol);      // add image column to row
      product.appendChild(infoCol);       // add info column to row
      productsHTML.appendChild(product);  // add row to DOM
    }
  }
}

/*
 *  Parameters: Object active tags and
 *  Return:     Void
 *
 *  Takes the object that represents all the products and the selected tags.
 *  Renders the tags and deals with their event listeners
 */
function renderFilters(state) {
  const tags = new Set();                            // To filter out duplicates
  const tagsHTML = document.getElementById("tags");  // tags will go here

  const priceRanges = {                              // price ranges
    "$0–50"     :  { low :   0, high :  50 },
    "$51–100"   :  { low :  51, high : 100 },
    "$101–200"  :  { low : 101, high : 200 },
    "$201–300"  :  { low : 201, high : 300 },
    "$301–500"  :  { low : 301, high : 500 },
    "$501–700"  :  { low : 501, high : 700 }
  };
  const priceRangeKeys = new Set(Object.keys(priceRanges));
  const priceHTML = document.getElementById("price-range"); // price ranges here

  const minRatings = new Set([1,2,3,4,5]);
  const minRatingsHTML = document.getElementById("min-rating");

  const tagsLabel = document.createElement("span");
  const priceLabel = document.createElement("span");
  const minRatingLabel = document.createElement("span");

  /*
   *  HANDLERS BELOW
   */

  // The below handlers add the sected filter to state
  const tagHandler = function (e) {
    state.tag = e.target.value;
    render(state);
  }
  const priceHandler = function (e) {
    state.priceRange = priceRanges[e.target.value];
    state.priceRangeString = e.target.value;
    render(state);
  }
  const minRatingHandler = function (e) {
    state.minRating = e.target.value;
    render(state);
  }

  // The below handlers remove the selected filter from state
  const removePriceHandler = function (e) {
    delete state.priceRange;
    delete state.priceRangeString;
    render(state);
  }
  const removeTagHandler = function (e) {
    delete state.tag;
    render(state);
  }
  const removeMinRatingHandler = function (e) {
    delete state.minRating;
    render(state);
  }

  /*
   *  OKAY, NO MORE HANDLERS
   */

  // Labels for the filters
  tagsLabel.innerText = "Sort By: ";
  priceLabel.innerText = "Price Range: ";
  minRatingLabel.innerText = "Min Rating: ";

  // destroy each filter
  destroy(tagsHTML);
  destroy(priceHTML);
  destroy(minRatingsHTML);

  // add tags for filtering in the set
  for (let product of state.products) {
    product.tags.forEach(function(el) {
      tags.add(el);
    });
  }

  // add each filter label to the DOM
  tagsHTML.appendChild(tagsLabel);
  priceHTML.appendChild(priceLabel);
  minRatingsHTML.appendChild(minRatingLabel);

  // create each filter and add it to the DOM
  tagsHTML.appendChild(createFilterHTML(state, tags, tagHandler, state.tag));
  if (state.tag !== undefined) // if a tag is highlighted, add a remove button
    tagsHTML.appendChild(createRemoveButton(removeTagHandler));

  priceHTML.appendChild(createFilterHTML(state, priceRangeKeys, priceHandler, state.priceRangeString));
  if (state.priceRange !== undefined)
    priceHTML.appendChild(createRemoveButton(removePriceHandler));

  minRatingsHTML.appendChild(createFilterHTML(state, minRatings, minRatingHandler, state.minRating));
  if (state.minRating !== undefined)
    minRatingsHTML.appendChild(createRemoveButton(removeMinRatingHandler));
}

/*
 *  Parameters: Object state, Set tags, Function handler, String/Number selected
 *  Return:     Node filterHTML
 *
 *
 */
function createFilterHTML(state, tags, handler, selected) {
  const filterHTML = document.createElement("ul");
  filterHTML.classList.add("filter-list")
  for (let savedTag of tags) {                // pull out all set tags
    let item = document.createElement("li");  // list item for each tag

    if (savedTag !== selected) {             // this tag isn't the current tag
      let link = document.createElement("a"); // make it a link

      link.innerText = savedTag;              // add tag text to link
      link.setAttribute("href", "#");         // link to top of the page
      link.classList.add("tag");              // add a tag class
      link.value = savedTag;                  // remember tag by element value
      // Links get a event listener, rendering with them as the current link
      link.addEventListener("click", handler);

      item.appendChild(link); // add the link to the list item

      } else item.innerText = savedTag; // else, it's already clicked so no link
      filterHTML.appendChild(item);     // either way, add the item to the DOM
  }
  return filterHTML;
}

/*
 *  Parameters: Function handler
 *  Return:     Node button
 *
 *  Takes a handler function and generates a Node that is a button (link) which
 *  will fire the handler when clicked. Built for the remove button.
 */
function createRemoveButton(handler) {
  const button = document.createElement("a");
  button.setAttribute("href", "#");
  button.classList.add("remove");
  button.addEventListener("click", handler); // add handler secified above
  button.innerText = "remove";

  return button;
}

/*
 *  Parameters: Number
 *  Return:     A node
 *
 *  Fills a span with 5 stars where n represents the number that should be
 *  filled. If n is is not a whole number, one star is a half star.
 */
function getRatingStars(n) {
  const stars = document.createElement("span"); // span to hold the icons

  for (let i = 1; i <= 5; i++) {
    let star = document.createElement("i");
    star.classList.add("material-icons");
    star.classList.add("tiny");
    console.log(i, n);
    if (i <= Math.floor(n)) star.innerText = "star";
    else if (i <= Math.ceil(n)) star.innerText = "star_half";
    else star.innerText = "star_border";
    stars.appendChild(star);
  }

  return stars;
}

/*
 *  Parameters: node
 *  Return:     void
 *
 *  Clears out a given node.
 */
function destroy(node) {
  console.log("DESTROY: " + node);
  while (node.children[0]) node.removeChild(node.children[0]);
}

},{"./product-list":1}]},{},[2]);
