import { calcCart } from "./calcCart.js";
export const counterproduct = window.addEventListener(
  "click",
  function (event) {
    const btnCart = event.target.closest(".btnCart");
    if (event.target.dataset.action === "plus") {
      const modalCartGeneration = event.target.closest(".modalCartGeneration");
      const prodPrice = modalCartGeneration.querySelector(".prodPrice");
      const itemModalCart = btnCart.querySelector(".itemModalCart");
      itemModalCart.innerText = ++itemModalCart.innerText;
      calcCart();
    }
    if (event.target.dataset.action === "minus") {
      const itemModalCart = btnCart.querySelector(".itemModalCart");
      itemModalCart.innerText = --itemModalCart.innerText;
      calcCart();
      if (event.target.closest(".btnCart") && itemModalCart.innerText === "0") {
        event.target.closest(".modalCartGeneration").remove();
      }
    }
  }
);
