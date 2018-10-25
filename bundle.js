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
    price: 799.99,
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
  }
]

},{}],2:[function(require,module,exports){
document.addEventListener("DOMContentLoaded", main);

function main() {
  render({low : 20, high : 700}, "grill");
}

function render(priceRange, tag) {
  const products = require("./product-list");
  const productsHTML = document.getElementById("products");

  destroy(productsHTML);

  for (let i = 0; i < products.length; i++) {
    let match = true;

    if (tag !== undefined && !products[i].tags.includes(tag)) match = false;
    else if (products[i].price !== undefined) {
      if (products[i].price < priceRange.low) match = false;
      else if (products[i].price > priceRange.high) match = false;
    }

    if (match) {
      let product = document.createElement("div");
      let imageCol = document.createElement("div");
      let infoCol = document.createElement("div");
      let image = document.createElement("img");
      let title = document.createElement("h2");
      let price = document.createElement("span");
      let ratingLabel = document.createElement("strong");
      let rating = getRatingStars(products[i].rating);
      let description = document.createElement("p");

      product.classList.add("row");
      imageCol.classList.add("col");
      imageCol.classList.add("m4");
      infoCol.classList.add("col");
      infoCol.classList.add("m8");

      image.setAttribute("src", products[i].image);
      imageCol.appendChild(image);

      title.innerText = products[i].name;
      infoCol.appendChild(title);

      price.innerText = "$" + products[i].price;
      infoCol.appendChild(price);

      infoCol.appendChild(document.createElement("br"));

      ratingLabel.innerText = "Rating";
      rating.insertBefore(ratingLabel, rating.children[0]);
      infoCol.appendChild(rating);

      description.innerText = products[i].description;
      infoCol.appendChild(description);

      product.appendChild(imageCol);
      product.appendChild(infoCol);
      productsHTML.appendChild(product);
    }
  }
}

function renderFilters(priceRange, tag) {
  const tags = new Set();
  const tagsHTML = document.getElementById("tags");

  for (let product in products) {
    products.tags.forEach(function(el) {
      tags.add(el);
    });
  }

  for (let tag of tags) {

  }
}

function getRatingStars(n) {
  const stars = document.createElement("span");
  console.log(n);

  for (let i = 0; i < Math.floor(n); i++) {
    let fullStar = document.createElement("i");
    fullStar.classList.add("material-icons");
    fullStar.classList.add("tiny");
    fullStar.innerText = "star";
    stars.appendChild(fullStar);
  }

  if (n - Math.floor(n) !== 0) {
    let halfStar = document.createElement("i");
    halfStar.classList.add("material-icons");
    halfStar.classList.add("tiny");
    halfStar.innerText = "star_half";
    stars.appendChild(halfStar);
  }

  for (let i = 0; i < 5 - Math.ceil(n); i++) {
    let noStar = document.createElement("i");
    noStar.classList.add("material-icons");
    noStar.classList.add("tiny");
    noStar.innerText = "star_border";
    stars.appendChild(noStar);
  }

  return stars;
}

function destroy(node) {
  while (node.children[0]) node.removeChild(children[0]);
}

},{"./product-list":1}]},{},[2]);
