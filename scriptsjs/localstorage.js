import { genCart } from "./cartgenfunc.js";
import { calcCart } from "./calcCart.js";
import { hideCartEmpty } from "./hideсartempty.js";
export let arrayCart = [];
if (localStorage.getItem("cart")) {
  arrayCart = JSON.parse(localStorage.getItem("cart"));
}
arrayCart.forEach((cart) => {
  const cartProduct = document.querySelector(".productCart");
  const cartItemHTML =
    genCart(cart.id, cart.imgSrc, cart.title, cart.price, cart.item) +
    cartProduct.innerHTML;
  cartProduct.innerHTML = cartItemHTML;
  calcCart();
  hideCartEmpty();
});
