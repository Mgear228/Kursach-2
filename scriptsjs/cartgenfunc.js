export function genCart(id, imgSrc, title, price, item) {
  return `<div class="modalCartGeneration" data-id="${id}">
  <img class="modalCartGenerationImg" src="${imgSrc}" alt="" />
  <div class="prodPriceBtnModal">
  <div class="namePriceProd"><p class="nameProduct">${title}</p>
  <p class="prodPrice">${price}</p>
  </div>
    <div class="btnCart"><button data-action="plus" type="button" class="btnIncrease">
    +
  </button><p class="itemModalCart">${item}</p>
  <button data-action="minus" type="button" class="btnDecrease">
    -
  </button></div>
  </div>
</div>
</div>`;
}
