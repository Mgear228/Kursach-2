import { arrayCart } from "./localstorage.js";
import { saveLocalStorage } from "./savelocalstorage.js";
const product = document.querySelector(".product");
const productCart = product.querySelector(".productCart");
const productItogoP = product.querySelector(".productItogo p");
const cartText = document.querySelector(".cartText");
const productItogo = product.querySelector(".productItogo");
product.addEventListener("click", function (event) {
  if (event.target.dataset.action === "save") {
    productCart.innerHTML = "";
    productItogoP.innerHTML = "Итого: 0";
    document.querySelector(".itemCart").innerHTML = `0`;
    if (productCart.children.length == 0) {
      cartText.classList.remove("none");
      productItogo.classList.add("none");
      arrayCart.splice(0);
      saveLocalStorage();
    }
    setTimeout("alert('Товар приобретен')", 50);
  }
});
export {};
