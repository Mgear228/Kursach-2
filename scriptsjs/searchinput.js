const api = "https://649455f80da866a953679814.mockapi.io/cards";

// Функция-конструктор
// function Product(name, price, imageURL1) {
//   this.name = name;
//   this.price = price;
//   this.imageURL1 = imageURL1;
// }
// Массив объектов товаров

fetch(api)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((e) => {
      items.push({ name: e.name, price: e.price, img: e.imageURL1 });
    });
  });

const items = [];

const searchInput = document.querySelector("#searchInput");
const searchResult = document.querySelector("#searchResult");
const searchProductList = document.querySelector("#searchProductList");
const searchItem = document.querySelector(".searchItem");

function getProduct(word, arrProducts) {
  return arrProducts.filter((s) => {
    // Определяем совподает ли то что ввели в iput
    // имени товара
    const regex = new RegExp(word, "gi");
    return s.name.match(regex);
  });
}

setTimeout(() => {
  function displayProduct() {
    const options = getProduct(this.value, items);
    const html = options
      .map((product) => {
        const regex = new RegExp(this.value, "gi");
        const productName = product.name.replace(
          regex,
          `<span class="hl">${this.value}</span>`
        );
        return `<li class="searchItem" id="searchItem">${productName}</li>`;
      })
      .slice(0, 7)
      .join("");
    searchProductList.innerHTML = html;

    searchProductList.addEventListener(
      "click",
      (element) => {
        const item = element.target.innerText;

        setTimeout(() => {
          items.forEach((e) => {
            console.log(e);
            if (e.name.toUpperCase().trim() == item.toUpperCase().trim()) {
              searchProductList.innerHTML = displayCard(e);
            }
          });
        });
      },
      0
    );

    if (!searchInput.value) {
      searchProductList.innerHTML = "";
      borderRadiusInput(searchProductList);
    }
  }

  searchInput.addEventListener("change", () => {
    // searchProductList.innerHTML = "";
    searchInput.value = "";
    borderRadiusInput(searchProductList);
    if (!searchInput) {
      searchProductList.innerHTML = "";
    }
  });
  searchInput.addEventListener("keyup", displayProduct);

  // функция смены у интпута радиуса нижнего бордера
  // при открытии списка товаров

  function borderRadiusInput(list) {
    if (list.children) {
      searchInput.style.borderBottomLeftRadius = 0 + "px";
      searchInput.style.borderBottomRightRadius = 0 + "px";
    } else {
      searchInput.style.borderBottomLeftRadius = 15 + "px";
      searchInput.style.borderBottomRightRadius = 15 + "px";
    }
  }

  // функция для отображения выбранной карточки
}, 1000);

function displayCard(params) {
  return `<div class="wrapper-card">
 <img src="${params.img}" alt="#" class="card-img">
 <div class="card-info">
 <p class="card-info-title">${params.name}</p>
 <p class="card-info-price">${params.price}</p>
 <button class="card-info-add">${"Добавить в корзину"}</button>
 </div>
 </div>`;
}
