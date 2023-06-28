// import { calcCart } from "./calcCart.js";
// import { hideCartEmpty } from "./hideсartempty.js";

// export let arrayCart = [];
// if (localStorage.getItem("cart")) {
//   let arrayCart = JSON.parse(localStorage.getItem("cart"));
//   console.log(arrayCart);
//   arrayCart.forEach((element) => {
//     const cartProduct = document.querySelector(".productCart");
//     const prodInfo = {
//       id: element.id,
//       imgSrc: element.img,
//       title: element.text,
//       price: element.price,
//     };
//     const itemInCart = cartProduct.querySelector(`[data-id="${prodInfo.id}"]`);
//     if (itemInCart) {
//       const itemModalCart = itemInCart.querySelector(".itemModalCart");
//       itemModalCart.innerHTML = ++itemModalCart.innerHTML;
//     } else {
//       const cartItemHTML =
//         `<div class="modalCartGeneration" data-id="${prodInfo.id}">
//     <img class="modalCartGenerationImg" src="${prodInfo.imgSrc}" alt="" />
//     <div class="prodPriceBtn">
//     <div class="namePriceProd"><p class="nameProduct">${prodInfo.title}</p>
//     <p class="prodPrice">${prodInfo.price}</p>
//     </div>
//       <div class="btnCart"><button data-action="plus" type="button" class="btnIncrease">
//       +
//     </button><p class="itemModalCart">1</p>
//     <button data-action="minus" type="button" class="btnDecrease">
//       -
//     </button></div>

//     </div>
//   </div>
// </div>` + cartProduct.innerHTML;
//       cartProduct.innerHTML = cartItemHTML;
//     }
//     calcCart();
//     hideCartEmpty();
//   });
// }
