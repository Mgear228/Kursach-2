import { calcCart } from "./calcCart.js";
import { hideCartEmpty } from "./hideсartempty.js";
import { cartGeneration } from "./cartgeneration.js";
import { arrayCart } from "./localstorage.js";
import { saveLocalStorage } from "./savelocalstorage.js";
export const counterproduct = document.addEventListener(
  "click",
  function (event) {
    const btnCart = event.target.closest(".btnCart");

    if (event.target.dataset.action === "plus") {
      const itemModalCart = btnCart.querySelector(".itemModalCart");
      itemModalCart.innerText = ++itemModalCart.innerText;
      const id = event.target.closest(".modalCartGeneration").dataset.id;
      arrayCart.forEach((el) => {
        if (el.id == id) {
          itemModalCart.innerText = ++el.item;
        }
        saveLocalStorage();
      });
      calcCart();
    }
    if (event.target.dataset.action === "minus") {
      const itemModalCart = btnCart.querySelector(".itemModalCart");
      const id = event.target.closest(".modalCartGeneration").dataset.id;
      arrayCart.forEach((el) => {
        if (el.id == id) {
          itemModalCart.innerText = --el.item;
          if (el.item == 0) {
            arrayCart.filter(function (f) {
              return f !== id;
            });
          }
        }
        saveLocalStorage();
      });
      calcCart();
      if (event.target.closest(".btnCart") && itemModalCart.innerText === "0") {
        event.target.closest(".modalCartGeneration").remove();
        const id = event.target.closest(".modalCartGeneration").dataset.id;
        const arrayElIndex = arrayCart.findIndex(
          (el) => el.id.toString() === id
        );
        arrayCart.forEach((el) => {
          if (el.item == "0") {
            arrayCart.splice(arrayElIndex, 1);
            console.log(arrayCart);
          }
          saveLocalStorage();
          hideCartEmpty();
        });
      }
    }
  }
);
