export const openclosemodalcart = (() => {
  const openCartBtn = document.getElementById("openCartBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  openCartBtn.addEventListener("click", function openCart() {
    document.getElementById("modal").classList.add("open");
  });
  closeModalBtn.addEventListener("click", function closeCart() {
    document.getElementById("modal").classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("modal").classList.remove("open");
    }
  });
  document
    .querySelector("#modal .modalBox")
    .addEventListener("click", (event) => {
      event._isClickWithInModal = true;
    });
  document.getElementById("modal").addEventListener("click", (event) => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
  });
})();
