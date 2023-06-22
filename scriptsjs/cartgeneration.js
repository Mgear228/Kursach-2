export const cartGeneration = window.addEventListener(
  "click",
  function (event) {
    if (event.target.hasAttribute("data-cart")) {
      const cardPr = event.target.closest(".cardProductId");
      const prodInfo = {
        id: cardPr.dataset.id,
        imgSrc: cardPr.querySelector(".cardProdImg").getAttribute("src"),
        imgSrc: cardPr.querySelector(".cardProdImg").getAttribute("src"),
        imgSrc: cardPr.querySelector(".cardProdImg").getAttribute("src"),
        imgSrc: cardPr.querySelector(".cardProdImg").getAttribute("src"),
        title: cardPr.querySelector(".nameProduct").innerText,
        price: cardPr.querySelector(".prodPrice").innerText,
      };
      const cartProduct = document.querySelector(".product");
      const cartItemHTML =
        `<div class="modalCartGeneration" data-id="${prodInfo.id}">
      <img class="modalCartGenerationImg" src="${prodInfo.imgSrc}" alt="" />
      <div class="prodPriceBtn">
        <p class="nameProduct">${prodInfo.title}</p>
        <p class="prodPrice">${prodInfo.price}</p>
        <button data-cart type="button" class="btnPushCart">
          +
        </button>
        <button data-cart type="button" class="btnPushCart">
          -
        </button>
      </div>
    </div>` + cartProduct.innerHTML;
      cartProduct.innerHTML = cartItemHTML;
    }
  }
);
