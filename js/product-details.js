const productImages = document.querySelector(".images");
const productDetails = document.querySelector(".product-specific__details");
const imageFeatured = document.querySelector(".image-featured");
const productThumbnails = document.querySelector(".product-image_thumbnails");

const womenNav = document.querySelector(".womenNav");
const menNav = document.querySelector(".menNav");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://rainydays.thefed.no/wp-json/wc/store/products/" + id;

async function fetchDetails() {
  const response = await fetch(url);
  const object = await response.json();

  if (object.categories[0].name === "Men") {
    menNav.classList.add("active");
  } else {
    womenNav.classList.add("active");
  }
  imageFeatured.innerHTML = "";
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
