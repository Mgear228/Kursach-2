export const htmlgenerator = (() => {
  function getData() {
    fetch("https://6495c583b08e17c91792a7f7.mockapi.io/adda")
      .then((dataTest) => {
        const data = dataTest.json();
        return data;
      })
      .then((data) => {
        print(data);
      });
  }
  function print(data) {
    const cardProduct = document.getElementById("cardProduct");
    data.forEach((element) => {
      cardProduct.innerHTML += `<div class="cardProductId" data-id="${Math.random()}">
      <img class="imageURL1" data-action="img" src="${
        element.imageURL1
      }" alt="" />
      <img class="imageURL2" src="${element.imageURL2}" alt="" />
      <img class="imageURL3" src="${element.imageURL3}" alt="" />
      <img class="imageURL4" src="${element.imageURL4}" alt="" />
      <div class="prodPriceBtn">
      <p class="prodPrice">${element.price} p.</p>
      <p class="nameProduct">${element.name}</p>
      <button data-cart class="btnPushCart">В корзину</button>
      </div>
    </div>`;
    });
  }
  getData();
})();
