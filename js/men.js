const new_products = document.querySelector(".new_products");
const popular_products = document.querySelector(".popular_products");

async function getProducts(url) {
  const response = await fetch(url);
  console.log(response);
  const products = await response.json();
  console.log(products);
  products.forEach(function (product) {
    for (let i = 0; i < product.categories.length; i++) {
      if (product.categories[i].slug === "new-men") {
        new_products.innerHTML += `
        <div class="product_overview_content product_overview_contentTest">
          <div class="woman_imgTest">
          <a href="product-specific.html?id=${product.id}" class="women_specific">
            <img src="${product.images[0].src}">
          </a>
          </div>
          <div>
          <a href="product-specific.html?id=${product.id}" class="women_specific">
             <h3>${product.name}</h3>
            </a>
             <p>${product.prices.price} kr</p>
          </div>
        </div>`;
      }
      if (product.categories[i].slug === "popular-men") {
        popular_products.innerHTML += `
          <div class="product_overview_content product_overview_contentTest">
            <div class="woman_imgTest">
            <a href="product-specific.html?id=${product.id}" class="women_specific">
              <img src="${product.images[0].src}">
            </a>
            </div>
            <div>
            <a href="product-specific.html?id=${product.id}" class="women_specific">
               <h3>${product.name}</h3>
              </a>
               <p>${product.prices.price} kr</p>
            </div>
          </div>`;
      }
    }
  });
}
getProducts("https://rainydays.thefed.no/wp-json/wc/store/products");

const newProductsLink = document.querySelector(".new_products .newProductsLink");
const test = document.querySelector(".product_overview");

console.log(newProductsLink);
newProductsLink.addEventListener("click", function () {
  async function getProducts(url) {
    const response = await fetch(url);
    console.log(response);
    const products = await response.json();
    console.log(products);
    products.forEach(function (product) {
      for (let i = 0; i < product.categories.length; i++) {
        if (product.categories[i].slug === "new-men") {
          test.innerHTML = `
                <div class="product_overview_content product_overview_contentTest">
                  <div class="woman_imgTest">
                  <a href="product-specific.html?id=${product.id}" class="women_specific">
                    <img src="${product.images[0].src}">
                  </a>
                  </div>
                  <div>
                  <a href="product-specific.html?id=${product.id}" class="women_specific">
                     <h3>${product.name}</h3>
                    </a>
                     <p>${product.prices.price} kr</p>
                  </div>
                </div>`;
        }
      }
    });
  }
  getProducts("https://rainydays.thefed.no/wp-json/wc/store/products");
});
