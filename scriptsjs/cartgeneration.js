import { arrayCart } from "./localstorage.js";
import { calcCart } from "./calcCart.js";
import { genCart } from "./cartgenfunc.js";
import { hideCartEmpty } from "./hideсartempty.js";
import { saveLocalStorage } from "./savelocalstorage.js";
export const cartGeneration = document.addEventListener(
  "click",
  function (event) {
    if (event.target.hasAttribute("data-cart")) {
      const cartProduct = document.querySelector(".productCart");
      const cardPr = event.target.closest(".cardProductId");

      const prodInfo = {
        item: 1,
        id: cardPr.dataset.id,
        imgSrc: cardPr.querySelector(".imageURL1").getAttribute("src"),
        title: cardPr.querySelector(".nameProduct").innerText,
        price: cardPr.querySelector(".prodPrice").innerText,
      };
      const itemInCart = cartProduct.querySelector(
        `[data-id="${prodInfo.id}"]`
      );
      if (itemInCart) {
      } else {
        const cartItemHTML =
          genCart(
            prodInfo.id,
            prodInfo.imgSrc,
            prodInfo.title,
            prodInfo.price,
            prodInfo.item
          ) + cartProduct.innerHTML;
        cartProduct.innerHTML = cartItemHTML;
        arrayCart.push(prodInfo);
        saveLocalStorage();
      }

      calcCart();
      hideCartEmpty();
    }
  }
);
