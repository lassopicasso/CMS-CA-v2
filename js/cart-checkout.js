//Page sliding
const slidePage = document.querySelector(".slidePage");

const firstNextBtn = document.querySelector(".next-0");

const secondPrevBtn = document.querySelector(".prev-1");
const secondNextBtn = document.querySelector(".next-1");

const thirdPrevBtn = document.querySelector(".prev-2");
const thirdNextBtn = document.querySelector(".next-2");

const completedBtn = document.querySelector(".next-3");

firstNextBtn.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
});

secondNextBtn.addEventListener("click", function () {
  slidePage.style.marginLeft = "-50%";
});
secondPrevBtn.addEventListener("click", function () {
  slidePage.style.marginLeft = "0%";
});

thirdNextBtn.addEventListener("click", function () {
  slidePage.style.marginLeft = "-75%";
});
thirdPrevBtn.addEventListener("click", function () {
  slidePage.style.marginLeft = "-25%";
});

//Cart

const cartItems = JSON.parse(localStorage.getItem("Cartlist"));
const cartOverview = document.querySelector(".cartPage");
const cartSum = document.querySelector(".sum");
if (cartItems === null) {
  const button = document.querySelector(".nextBtn");
  cartOverview.innerHTML += `<p>No items in the cart</p>`;
  button.innerHTML = `<button disabled>Next</button>`;
}

const alphaProG3 = [];
const alphaPrice = 999;
let alphaTotalPrice = 0;
const bergensProJ3 = [];
const bergensPrice = 1256;
let bergensTotalPrice = 0;
if (cartItems !== null) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i] === "alphaProG3") {
      alphaProG3.push(cartItems[i]);
    } else {
      bergensProJ3.push(cartItems[i]);
    }
  }
}

if (alphaProG3.length > 0) {
  alphaTotalPrice = alphaPrice * alphaProG3.length;
  alphaTotalPriceComma = numberWithThousandSeparator(alphaPrice * alphaProG3.length);
  cartOverview.innerHTML += `<div class="cart-itemContent cart-itemContent-men">
                                  <div class=imageCart 
                                  style ="background-image: url('../Images/man-yellow-rain-jacket.jpg')" ></div>
                                  <div class="itemName">Alpha Pro G3</div>
                                  <div class="amount">
                                    <div class="minus minusMen"> - </div>
                                    <div class="middle middleMen">${alphaProG3.length}</div>
                                    <div class="plus plusMen"> + </div>
                                  </div>
                                  <div class="totalPrice totalPriceMen">Kr ${alphaTotalPriceComma}</div>
                            
                                  </div>`;
}

if (bergensProJ3.length > 0) {
  bergensTotalPrice = bergensPrice * bergensProJ3.length;
  bergensTotalPriceComma = numberWithThousandSeparator(bergensPrice * bergensProJ3.length);
  cartOverview.innerHTML += `<div class="cart-itemContent cart-itemContent-women">
                                <div class=imageCart 
                                style ="background-image: url('../Images/female-hiker-yellow-jacket.jpg')" ></div>
                                <div class="itemName">Bergens Pro J3</div>
                                <div class="amount">
                                  <div class="minus minusWomen"> - </div>
                                  <div class="middle middleWomen">${bergensProJ3.length}</div>
                                  <div class="plus plusWomen"> + </div>
                                </div>
                                <div class="totalPrice totalPriceWomen">Kr ${bergensTotalPriceComma}</div>
                              </div>`;
}

const minusMen = document.querySelector(".minusMen");
const plusMen = document.querySelector(".plusMen");
const middleMen = document.querySelector(".middleMen");
const totalPriceMen = document.querySelector(".totalPriceMen");
const cartItemContentMen = document.querySelector(".cart-itemContent-men");

const indexMen = cartItems.indexOf("alphaProG3");

if (minusMen && plusMen) {
  minusMen.addEventListener("click", function () {
    if (middleMen.innerHTML === "1") {
      cartItemContentMen.style.display = "none";
    }
    if (indexMen > -1) {
      cartItems.splice(indexMen, 1);
      localStorage.setItem("Cartlist", JSON.stringify(cartItems));
      middleMen.innerHTML = Number(middleMen.innerHTML) - 1;
      labelItemCounter.innerHTML = Number(labelItemCounter.innerHTML) - 1;
      alphaTotalPrice -= alphaPrice;
      totalPriceMen.innerHTML = `kr ${numberWithThousandSeparator(alphaTotalPrice)}`;
      sumPrice.innerHTML = `Kr ${numberWithThousandSeparator(bergensTotalPrice + alphaTotalPrice)}`;
    }
  });
  plusMen.addEventListener("click", function () {
    cartItems.push("alphaProG3");
    localStorage.setItem("Cartlist", JSON.stringify(cartItems));
    middleMen.innerHTML = Number(middleMen.innerHTML) + 1;
    labelItemCounter.innerHTML = Number(labelItemCounter.innerHTML) + 1;
    alphaTotalPrice += alphaPrice;
    totalPriceMen.innerHTML = `kr ${numberWithThousandSeparator(alphaTotalPrice)}`;
    sumPrice.innerHTML = `Kr ${numberWithThousandSeparator(bergensTotalPrice + alphaTotalPrice)}`;
  });
}
const minusWomen = document.querySelector(".minusWomen");
const plusWomen = document.querySelector(".plusWomen");
const middleWomen = document.querySelector(".middleWomen");
const totalPriceWomen = document.querySelector(".totalPriceWomen");
const cartItemContentWomen = document.querySelector(".cart-itemContent-women");

const indexWomen = cartItems.indexOf("bergensProJ3");

if (minusWomen && plusWomen) {
  minusWomen.addEventListener("click", function () {
    if (middleWomen.innerHTML === "1") {
      cartItemContentWomen.style.display = "none";
    }
    if (indexWomen > -1) {
      cartItems.splice(indexWomen, 1);
      localStorage.setItem("Cartlist", JSON.stringify(cartItems));
      middleWomen.innerHTML = Number(middleWomen.innerHTML) - 1;
      labelItemCounter.innerHTML = Number(labelItemCounter.innerHTML) - 1;
      bergensTotalPrice -= bergensPrice;
      totalPriceWomen.innerHTML = `kr ${numberWithThousandSeparator(bergensTotalPrice)}`;
      sumPrice.innerHTML = `Kr ${numberWithThousandSeparator(bergensTotalPrice + alphaTotalPrice)}`;
    }
  });
  plusWomen.addEventListener("click", function () {
    cartItems.push("bergensProJ3");
    localStorage.setItem("Cartlist", JSON.stringify(cartItems));
    middleWomen.innerHTML = Number(middleWomen.innerHTML) + 1;
    labelItemCounter.innerHTML = Number(labelItemCounter.innerHTML) + 1;
    bergensTotalPrice += bergensPrice;
    totalPriceWomen.innerHTML = `kr ${numberWithThousandSeparator(bergensTotalPrice)}`;
    sumPrice.innerHTML = `Kr ${numberWithThousandSeparator(bergensTotalPrice + alphaTotalPrice)}`;
  });
}

function numberWithThousandSeparator(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

let sum = alphaTotalPrice + bergensTotalPrice;
let sumSeparator = numberWithThousandSeparator(sum);

cartSum.innerHTML += `  
                        <div></div>
                        <div></div>
                        <div class="totalPrice">Sum</div>
                        <div class="totalPrice sumPrice">Kr ${sumSeparator}</div>
                      `;

const sumPrice = document.querySelector(".sumPrice");

if (cartItems.length !== 0 || !cartItems === null) {
  firstNextBtn.disabled = false;
}

//Shipping Details

const form = document.querySelector("#shippingForm");

const name = document.querySelector("#fullName");
const nameError = document.querySelector("#fullNameError");

const street = document.querySelector("#street");
const streetError = document.querySelector("#streetError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

form.addEventListener("click", controlInput);
form.addEventListener("keyup", controlInput);

function controlInput(event) {
  if (event.target.id == "fullName" || event.target.id === "email" || event.target.id === "street" || event.target.id === "postalCode") {
    let id = event.target.id;
    let target = document.getElementById(event.target.id);
    let error = document.getElementById(`${id}Error`);
    target.onblur = function blur() {
      if (id === "fullName" || id === "street") {
        if (checkLength(target.value, 0) && (id === "fullName" || id === "street")) {
          error.style.display = "none";
          target.style.borderColor = "lightgreen";
        } else {
          error.style.display = "block";
          target.style.borderColor = "red";
        }
      } else if (id === "email") {
        if (checkEmail(email.value)) {
          error.style.display = "none";
          target.style.borderColor = "lightgreen";
        } else {
          error.style.display = "block";
          target.style.borderColor = "red";
        }
      } else {
        if (checkPostal(postalCode.value)) {
          error.style.display = "none";
          target.style.borderColor = "lightgreen";
        } else {
          error.style.display = "block";
          target.style.borderColor = "red";
        }
      }
    };
    target.onfocus = function focus() {
      target.style.borderColor = "";
      error.style.display = "none";
    };
  }
  controlForm();
}

function controlForm() {
  if (checkLength(fullName.value, 0) && checkLength(street.value, 0) && checkPostal(postalCode.value) && checkEmail(email.value)) {
    secondNextBtn.disabled = false;
  } else {
    secondNextBtn.disabled = true;
  }
}

function checkLength(value, length) {
  if (value.trim().length > length) {
    return true;
  } else {
    return false;
  }
}

function checkPostal(postalCode) {
  const regularExpression = /\b\d{4}\b/;
  const matchExpressionString = regularExpression.test(postalCode);

  return matchExpressionString;
}
function checkEmail(email) {
  const regularExpression = /\S+@\S+\.\S+/;
  const matchExpressionString = regularExpression.test(email);
  return matchExpressionString;
}

//Payment Details

const paymentForm = document.querySelector("#paymentForm");

const cardNumber = document.querySelector("#cardNumber");
const cardNumberError = document.querySelector("#cardNumberError");

const expiration = document.querySelector("#expiration");
const expirationError = document.querySelector("#expirationError");

const securityCode = document.querySelector("#securityCode");
const securityCodeError = document.querySelector("#securityCodeError");

paymentForm.addEventListener("click", controlPaymentInput);
paymentForm.addEventListener("keyup", controlPaymentInput);

function controlPaymentInput(event) {
  if (event.target.id == "cardNumber" || event.target.id === "expiration" || event.target.id === "securityCode") {
    let id = event.target.id;
    let target = document.getElementById(event.target.id);
    let error = document.getElementById(`${id}Error`);
    target.onblur = function blur() {
      if (id === "cardNumber") {
        target.value = target.value.replace(/(\d{4}(?!\s))/g, "$1 ");
        if (checkCardNumberLength(target.value, 19) && id === "cardNumber") {
          error.style.display = "none";
          target.style.borderColor = "lightgreen";
        } else {
          error.style.display = "block";
          target.style.borderColor = "red";
        }
      } else if (id === "expiration") {
        if (checkCardExp(target.value) && id === "expiration") {
          error.style.display = "none";
          target.style.borderColor = "lightgreen";
        } else {
          error.style.display = "block";
          target.style.borderColor = "red";
        }
      } else {
        if (checkCvcNumber(target.value) && id === "securityCode") {
          error.style.display = "none";
          target.style.borderColor = "lightgreen";
        } else {
          error.style.display = "block";
          target.style.borderColor = "red";
        }
      }
    };
    target.onfocus = function focus() {
      target.style.borderColor = "";
      error.style.display = "none";
    };
  }
  controlFormPayment();
}

function controlFormPayment() {
  if (checkCardNumberLength(cardNumber.value, 19) && checkCardExp(expiration.value) && checkCvcNumber(securityCode.value)) {
    thirdNextBtn.disabled = false;
  } else {
    thirdNextBtn.disabled = true;
  }
}

function checkCardNumberLength(value, length) {
  if (value.trim().length === length) {
    return true;
  } else {
    return false;
  }
}

function checkCardExp(cardInfo) {
  const regularExpression = /^\d{2}-\d{2}$/;
  const matchExpressionString = regularExpression.test(cardInfo);
  return matchExpressionString;
}

function checkCvcNumber(cardInfo) {
  const regularExpression = /\b\d{3}\b/;
  const matchExpressionString = regularExpression.test(cardInfo);
  return matchExpressionString;
}

//Checkout
completedBtn.addEventListener("click", function () {
  localStorage.clear("Clear");
});
