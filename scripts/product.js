document.addEventListener("DOMContentLoaded", main);

/*
 *  The event handler for DOMContentLoaded
 */
function main() {
  render({priceRange : {low : 20, high : 700}, tag : "grill"});
}

/*
 *  Parameters: Object tags
 *  Return:     Void
 *
 *  Builds the list of products based on the program state. Calls seperate
 *  function for rendering tags and price range buttons.
 */
function render({priceRange, tag}) {
  // debugger;
  const products = require("./product-list"); // list of all products
  const productsHTML = document.getElementById("products"); // product spot

  destroy(productsHTML);
  renderFilters({products : products, priceRange : priceRange, tag : tag});

  for (let i = 0; i < products.length; i++) { // loop over products
    let match = true; // if `match`, the product will display

    // if a tag was passed, and it doesn't match any current product tags...
    if (tag !== undefined && !products[i].tags.includes(tag)) match = false;
    else if (products[i].price !== undefined) { //...otherwise...
      if (products[i].price < priceRange.low) match = false; // price min
      else if (products[i].price > priceRange.high) match = false; // price max
    }

    if (match) { // start creating the pieces
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
function renderFilters({products, priceRange, tag}) {
  const tags = new Set();                            // To filter out duplicates
  const tagsHTML = document.getElementById("tags");  // tags will go here
  const priceRanges = [                              // price ranges
    { low :   0, high :  50 },
    { low :  51, high : 100 },
    { low : 101, high : 200 },
    { low : 201, high : 300 },
    { low : 301, high : 500 },
    { low : 501, high : 700 }
  ];
  const priceHTML = document.getElementById("price-range"); // price ranges here

  destroy(tagsHTML);

  for (let product of products) { // add tags for filtering in the set
    product.tags.forEach(function(el) {
      tags.add(el);
    });
  }

  for (let savedTag of tags) { // pull out all set tags
    let item = document.createElement("li"); // list item for each tag

    if (savedTag !== tag) { // make sure this isn't the current tag
      let link = document.createElement("a"); // make it a link

      link.innerText = savedTag;        // add tag text to link
      link.setAttribute("href", "#");   // link to top of the page
      link.classList.add("tag");        // add a tag class
      link.value = savedTag;            // remember tag by element value
      // Links get a event listener, rendering with them as the current link
      link.addEventListener("click", function (e) {
        console.log(e)
        render({priceRange : priceRange, tag : e.target.value});
      });

      item.appendChild(link); // add the link to the list item

    } else item.innerText = savedTag; // else, it's already clicked, so no link

    tagsHTML.appendChild(item); // either way, add the item to the DOM
  }
}

/*
 *  Parameters: Number
 *  Return:     A node
 *
 *  Fills a span with 5 stars where n represents the number that should be
 *  filled. If n is is not a whole number, one star is a half star.
 *
 *  To do: Refactor so that we do no duplicate so much code!!
 */
function getRatingStars(n) {
  const stars = document.createElement("span"); // span to hold the icons

  // for each whole number in `n` ...
  for (let i = 0; i < Math.floor(n); i++) {
    let fullStar = document.createElement("i"); // create i tag
    fullStar.classList.add("material-icons");   // Materialize's class for icons
    fullStar.classList.add("tiny");             // class for tiny icons
    fullStar.innerText = "star";                // class for filled star
    stars.appendChild(fullStar);                // add to stars span
  }

  // if `n` is not a whole number ...
  if (n - Math.floor(n) !== 0) {
    let halfStar = document.createElement("i"); // create i tag
    halfStar.classList.add("material-icons");   // Materialize's class for icons
    halfStar.classList.add("tiny");             // class for tiny icons
    halfStar.innerText = "star_half";           // class for half star
    stars.appendChild(halfStar);                // add to stars span
  }

  // for each star not filled by n
  for (let i = 0; i < 5 - Math.ceil(n); i++) {
    let noStar = document.createElement("i");   // create i tag
    noStar.classList.add("material-icons");     // Materialize's class for icons
    noStar.classList.add("tiny");               // class for tiny icons
    noStar.innerText = "star_border";           // class for empty star
    stars.appendChild(noStar);                  // add to stars
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


// function filter(e) {
//   render()
// }
