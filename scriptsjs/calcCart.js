export function calcCart() {
  const cartItems = document.querySelectorAll(".modalCartGeneration");
  let totalPrice = 0;
  cartItems.forEach(function (element) {
    const elPrice = element.querySelector(".prodPrice").innerHTML;
    const elItem = element.querySelector(".itemModalCart").innerHTML;
    const elementPrice = elPrice.slice(0, -2);
    const totalPriceEl = elementPrice * elItem;
    totalPrice += totalPriceEl;
  });
  document.querySelector(".productItogo p").innerHTML = `Итого: ${
    Math.floor(totalPrice * 100) / 100
  } p.`;
}
