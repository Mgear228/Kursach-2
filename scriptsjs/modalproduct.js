const cardProduct = document.querySelector(".cardProduct");
const modalProduct = document.querySelector(".modalProduct");
document.addEventListener("click", (e) => {
  const click = e.composedPath().includes(modalProduct);
  if (click) {
    modalProduct.classList.remove("open");
  }
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalProduct.classList.remove("open");
  }
});
cardProduct.addEventListener("click", function (event) {
  if (event.target.dataset.action === "img") {
    const cardPr = event.target.closest(".cardProductId");
    const modalProduct = document.querySelector(".modalProduct");
    modalProduct.classList.add("open");
    const prodInfo = {
      imgSrc1: cardPr.querySelector(".imageURL1").getAttribute("src"),
    };
    const cartItemHTML = `<div class="cardBox">
    <img class="img1" src="${prodInfo.imgSrc1}" alt="" />
    </div>`;
    modalProduct.innerHTML = cartItemHTML;
  }
});
export {};
