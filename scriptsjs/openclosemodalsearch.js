export const openclosemodalsearch = (() => {
  const searchInputBtn = document.getElementById("searchInputBtn");
  const closeModalSearchBtn = document.getElementById("closeModalSearchBtn");
  searchInputBtn.addEventListener("click", function openSearch() {
    document.getElementById("modalSearch").classList.add("open");
  });
  closeModalSearchBtn.addEventListener("click", function closeSearch() {
    document.getElementById("modalSearch").classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.getElementById("modalSearch").classList.remove("open");
    }
  });
})();
