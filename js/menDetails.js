const addToCartAlpha = document.querySelector(".alphaProG3");
const labelItemCounterMen = document.querySelector("#lblCartCount");
addToCartAlpha.addEventListener("click", jacketsForMenArray);

function jacketsForMenArray() {
  if (JSON.parse(localStorage.getItem("Cartlist")) === null) {
    cartArray = [];
    cartArray.push(addToCartAlpha.classList.value);
    localStorage.setItem("Cartlist", JSON.stringify(cartArray));
    labelItemCounterMen.innerHTML = cartArray.length;
  } else {
    let cartArray = JSON.parse(localStorage.getItem("Cartlist"));
    cartArray.push(addToCartAlpha.classList.value);
    labelItemCounterMen.innerHTML = cartArray.length;
    localStorage.setItem("Cartlist", JSON.stringify(cartArray));
  }
}
const addedToCart = document.querySelector(".addedToCart");

addToCartAlpha.addEventListener("click", function () {
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
