export function hideCartEmpty() {
  const productCart = document.querySelector(".productCart");
  const cartText = document.querySelector(".cartText");
  const productItogo = document.querySelector(".productItogo");
  if (productCart.children.length > 0) {
    cartText.classList.add("none");
    productItogo.classList.remove("none");
  } else {
    cartText.classList.remove("none");
    productItogo.classList.add("none");
  }
}
