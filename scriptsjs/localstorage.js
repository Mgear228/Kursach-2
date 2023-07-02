import { genCart } from "./cartgenfunc.js";
import { calcCart } from "./calcCart.js";
import { hideCartEmpty } from "./hideсartempty.js";
import { cartGeneration } from "./cartgeneration.js";
export let arrayCart = [];
if (localStorage.getItem("cart")) {
  arrayCart = JSON.parse(localStorage.getItem("cart"));
}
arrayCart.forEach((cart) => {
  const cartProduct = document.querySelector(".productCart");
  const itemInCart = cartProduct.querySelector(`[data-id="${cart.id}"]`);
  if (itemInCart) {
    const itemModalCart = itemInCart.querySelector(".itemModalCart");
    itemModalCart.innerHTML = ++itemModalCart.innerHTML;
  } else {
    const cartItemHTML =
      genCart(cart.id, cart.imgSrc, cart.title, cart.price) +
      cartProduct.innerHTML;
    cartProduct.innerHTML = cartItemHTML;
  }
  calcCart();
  hideCartEmpty();
});
