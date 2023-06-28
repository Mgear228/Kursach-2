// import { arrayCart } from "./localstorage.js";
import { calcCart } from "./calcCart.js";
import { hideCartEmpty } from "./hideсartempty.js";
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
      if (itemInCart) {
        const itemModalCart = itemInCart.querySelector(".itemModalCart");
        itemModalCart.innerHTML = ++itemModalCart.innerHTML;
      } else {
        const cartItemHTML =
          `<div class="modalCartGeneration" data-id="${prodInfo.id}">
      <img class="modalCartGenerationImg" src="${prodInfo.imgSrc}" alt="" />
      <div class="prodPriceBtn">
      <div class="namePriceProd"><p class="nameProduct">${prodInfo.title}</p>
      <p class="prodPrice">${prodInfo.price}</p>
      </div>
        <div class="btnCart"><button data-action="plus" type="button" class="btnIncrease">
        +
      </button><p class="itemModalCart">1</p>
      <button data-action="minus" type="button" class="btnDecrease">
        -
      </button></div>
        
      </div>
    </div>
  </div>` + cartProduct.innerHTML;
        cartProduct.innerHTML = cartItemHTML;
      }
      // arrayCart.unshift({
      //   id: prodInfo.id,
      //   img: prodInfo.imgSrc,
      //   text: prodInfo.title,
      //   price: prodInfo.price,
      // });
      calcCart();
      hideCartEmpty();
      // localStorage.setItem("cart", JSON.stringify(arrayCart));
    }
  }
);
