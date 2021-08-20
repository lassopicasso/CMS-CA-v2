const productImages = document.querySelector(".images");
const productDetails = document.querySelector(".product-specific__details");
const imageFeatured = document.querySelector(".image-featured");
const productThumbnails = document.querySelector(".product-image_thumbnails");

const queryString = document.location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
console.log(params);

const id = params.get("id");
console.log(id);

const url = "https://rainydays.thefed.no/wp-json/wc/store/products/" + id;
console.log(url);

async function fetchDetails() {
  const response = await fetch(url);
  const object = await response.json();
  console.log(object);
  imageFeatured.innerHTML = `<img class="product-image"
                                  id="featured"
                                  src="${object.images[0].src}"
                                  alt="${object.images[0].alt}"
                              />`;

  productThumbnails.innerHTML = `
                                     <div class="thumbnailImage">
                                        <img class="product-image activeImg thumbnail"
                                             src="${object.images[0].src}"
                                             alt="${object.images[0].alt}"
                                        />
                                     </div>
                                     <div class="thumbnailImage">
                                        <img class="product-image thumbnail"
                                             src="${object.images[1].src}"
                                             alt="${object.images[1].alt}"
                                        />
                                     </div>
                                     <div class="thumbnailImage">
                                        <img class="product-image thumbnail"
                                             src="${object.images[0].src}"
                                             alt="${object.images[0].alt}"
                                        />
                                     </div>
                                     <div class="thumbnailImage">
                                        <img class="product-image thumbnail"
                                             src="${object.images[1].src}"
                                             alt="${object.images[1].alt}"
                                        />
                                     </div>
                                    `;

  const thumbnails = document.getElementsByClassName("thumbnail");
  const activeImage = document.getElementsByClassName("activeImg");
  console.log(activeImage);
  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
      if (activeImage.length > 0) {
        activeImage[0].classList.remove("activeImg");
      }
      thumbnails[i].classList.add("activeImg");
      document.getElementById("featured").src = activeImage[0].src;
    });
  }
  productDetails.innerHTML = `
                            <h1>${object.name} - ${object.prices.price} kr </h1>
                            <p>${object.short_description} </p>
                            <h2>Specifications</h2>
                            ${object.description}
                            `;
}
fetchDetails();
