const addToCartBergens = document.querySelector(".bergensProJ3");
const labelItemCounterWomen = document.querySelector("#lblCartCount");
addToCartBergens.addEventListener("click", jacketsForWomenArray);

function jacketsForWomenArray() {
  if (JSON.parse(localStorage.getItem("Cartlist")) === null) {
    cartArray = [];
    cartArray.push(addToCartBergens.classList.value);
    localStorage.setItem("Cartlist", JSON.stringify(cartArray));
    labelItemCounterWomen.innerHTML = cartArray.length;
  } else {
    let cartArray = JSON.parse(localStorage.getItem("Cartlist"));
    cartArray.push(addToCartBergens.classList.value);
    labelItemCounterWomen.innerHTML = cartArray.length;
    localStorage.setItem("Cartlist", JSON.stringify(cartArray));
  }
}
const addedToCart = document.querySelector(".addedToCart");

addToCartBergens.addEventListener("click", function () {
  addedToCart.style.display = "block";
  addedToCart.innerHTML = `Added to cart`;
  let opacity = 1;
  let timer = setInterval(function () {
    if (opacity <= 0.1) {
      clearInterval(timer);
      addedToCart.style.display = "none";
    }
    addedToCart.style.opacity = opacity;
    addedToCart.style.filter = `alpha(opacity=` + opacity * 100 + ")";
    opacity -= opacity * 0.1;
  }, 80);
});
