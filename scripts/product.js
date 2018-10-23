document.addEventListener("DOMContentLoaded", main);

function main() {
    const products = require("./product-list");
    const productsHTML = document.getElementById("products");

    for (let i = 0; i < products.length; i++) {
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

function getRatingStars(n) {
  const stars = document.createElement("span");
  console.log(n);

  for (let i = 0; i < Math.floor(n); i++) {
    let fullStar = document.createElement("i");
    fullstar.classList.add("material-icons");
    fullstar.classList.add("tiny");
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
