import {} from "./searchinput";
import { arrayCart } from "./localstorage.js";
import { calcCart } from "./calcCart.js";
import { genCart } from "./cartgenfunc.js";
import { hideCartEmpty } from "./hideсartempty.js";
import { saveLocalStorage } from "./savelocalstorage.js";

function searchAdd(button, cardName) {
  button.addEventListener("click", (e) => {
    if (e.target.hasAttribute("data-card-input")) {
      const cartProduct = document.querySelector(".productCart");
      const card = document.querySelector(`${cardName}`);
      const cardTitle = card.innerText;
      const cardList = document.querySelectorAll(".cardProductId");
      const arrCardList = Array.from(cardList);
      arrCardList.forEach((e) => {
        const nameProduct = e.children[4].children[1].innerText;
        if (nameProduct === cardTitle) {
          const dataId = e.getAttribute("data-id");
          const prodInfo = {
            item: 1,
            id: dataId,
            imgSrc: e.querySelector(".imageURL1").getAttribute("src"),
            title: e.querySelector(".nameProduct").innerText,
            price: e.querySelector(".prodPrice").innerText,
          };
          const itemInCart = cartProduct.querySelector(`[data-id="${dataId}"]`);
          if (itemInCart) {
            const itemModalCart = itemInCart.querySelector(".itemModalCart");
            itemModalCart.innerHTML = prodInfo.item;
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
      });
    }
  });
}
searchAdd(searchProductList, ".card-info-title");
searchAdd(modalSearch, ".card-info-title");

export {};
