import { arrayCart } from "./localstorage.js";
export function saveLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(arrayCart));
}
