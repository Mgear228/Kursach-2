// import { arrayCart } from "./localstorage.js";
const product = document.querySelector(".product");
const productCart = product.querySelector(".productCart");
const productItogoP = product.querySelector(".productItogo p");
const cartText = document.querySelector(".cartText");
const productItogo = product.querySelector(".productItogo");
product.addEventListener("click", function (event) {
  if (event.target.dataset.action === "save") {
    productCart.innerHTML = "";
    productItogoP.innerHTML = "Итого: 0";
    // arrayCart.splice();
    // localStorage.setItem("cart", JSON.stringify(arrayCart));
    if (productCart.children.length == 0) {
      cartText.classList.remove("none");
      productItogo.classList.add("none");
    }
    setTimeout("alert('Товар приобретен')", 50);
  }
});
export {};
