export function calcCart() {
  const cartItems = document.querySelectorAll(".modalCartGeneration");
  let totalPrice = 0;
  cartItems.forEach(function (element) {
    const elPrice = element.querySelector(".prodPrice").innerHTML;
    const elItem = element.querySelector(".itemModalCart").innerHTML;
    const totalPriceEl = elPrice * elItem;
    totalPrice += totalPriceEl;
  });
  document.querySelector(
    ".productItogo p"
  ).innerHTML = `itogo: ${totalPrice} p.`;
}
