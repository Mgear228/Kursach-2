const api = "https://6495c583b08e17c91792a7f7.mockapi.io/adda";

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((e) => {
      items.push({ name: e.name, price: e.price, img: e.imageURL1 });
    });
  });

const items = [];

const searchInput = document.querySelector("#searchInput");
const searchProductList = document.querySelector("#searchProductList");
const searchItem = document.querySelector(".searchItem");
const modalSearchList = document.querySelector(".modalSearchList");
const searchInputModal = document.querySelector(".searchInputModal");
const modalSearch = document.querySelector(".modalSearchList");

function getProduct(word, arrProducts) {
  return arrProducts.filter((s) => {
    // Определяем совподает ли то что ввели в iput
    // имени товара
    const regex = new RegExp(word, "gi");
    return s.name.match(regex);
  });
}

setTimeout(() => {
  function displayProduct(text, container) {
    const options = getProduct(text.value, items);

    const html = options
      .map((product) => {
        const regex = new RegExp(text.value, "gi");
        const productName = product.name.replace(
          regex,
          `<span class="hl">${text.value}</span>`
        );
        return `<li class="searchItem" id="searchItem">${productName}</li>`;
      })
      .slice(0, 7)
      .join("");
    container.innerHTML = html;
    borderRadiusInput(container);
    container.addEventListener(
      "click",
      (element) => {
        const item = element.target.innerText;

        setTimeout(() => {
          items.forEach((e) => {
            if (e.name.toUpperCase().trim() == item.toUpperCase().trim()) {
              container.innerHTML = displayCard(e);
            }
          });
        });
      },
      0
    );
    if (!text.value) {
      container.innerHTML = "";
    }
  }

  searchInput.addEventListener("change", () => {
    searchInput.value = "";
  });

  searchInput.addEventListener("keyup", () => {
    displayProduct(searchInput, searchProductList);
  });

  searchInputModal.addEventListener("change", () => {
    modalSearchList.value = "";
  });
  searchInputModal.addEventListener("keyup", () => {
    displayProduct(searchInputModal, modalSearchList);
  });
}, 1000);

function displayCard(params) {
  return `<div class="wrapper-card">
 <img src="${params.img}" alt="#" class="card-img">
 <div class="card-info">
 <p class="card-info-title">${params.name}</p>
 <p class="card-info-price">${params.price}</p>
 <button class="card-info-add" data-card-input>${"В корзину"}</button>
 </div>
 </div>`;
}

document.addEventListener("click", (e) => {
  const withinBoundaries = e.composedPath().includes(searchProductList);

  if (!withinBoundaries) {
    searchProductList.innerHTML = ""; // скрываем элемент т к клик был за его пределами
    borderRadiusInput(searchProductList);
  }
});

function borderRadiusInput(list) {
  if (list.children.length !== 0 && list.children.length !== 7) {
    searchInput.style.borderBottomLeftRadius = 0 + "px";
    searchInput.style.borderBottomRightRadius = 0 + "px";
  } else {
    searchInput.style.borderBottomLeftRadius = 15 + "px";
    searchInput.style.borderBottomRightRadius = 15 + "px";
  }
}
