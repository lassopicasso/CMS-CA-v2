const container = document.querySelector(".container");

async function getProducts(url) {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);

  products.forEach(function (product) {
    if (product.categories.name[1] === "New") {
      container.innerHTML += `<div class="product">
        <h2>${product.name}</h2>
        <div class="prod-img"><img src="${product.images[0].src}"><div>
        <p>${product.price_html}</p>
      </div>`;
    }
  });
}

getProducts("https://rainydays.thefed.no/wp-json/wc/store/products");
