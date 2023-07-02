import { arrayCart } from "./localstorage.js";
import { calcCart } from "./calcCart.js";
import { genCart } from "./cartgenfunc.js";
import { hideCartEmpty } from "./hideсartempty.js";
import { saveLocalStorage } from "./savelocalstorage.js";
export const cartGeneration = window.addEventListener(
  "click",
  function (event) {
    if (event.target.hasAttribute("data-cart")) {
      const cartProduct = document.querySelector(".productCart");
      const cardPr = event.target.closest(".cardProductId");
      const prodInfo = {
        id: cardPr.dataset.id,
        imgSrc: cardPr.querySelector(".imageURL1").getAttribute("src"),
        title: cardPr.querySelector(".nameProduct").innerText,
        price: cardPr.querySelector(".prodPrice").innerText,
      };
      const itemInCart = cartProduct.querySelector(
        `[data-id="${prodInfo.id}"]`
      );
      arrayCart.push(prodInfo);
      saveLocalStorage();
      if (itemInCart) {
        const itemModalCart = itemInCart.querySelector(".itemModalCart");
        itemModalCart.innerHTML = ++itemModalCart.innerHTML;
      } else {
        const cartItemHTML =
          genCart(
            prodInfo.id,
            prodInfo.imgSrc,
            prodInfo.title,
            prodInfo.price
          ) + cartProduct.innerHTML;
        cartProduct.innerHTML = cartItemHTML;
      }

      calcCart();
      hideCartEmpty();
    }
  }
);
