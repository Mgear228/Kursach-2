import art1 from "../src/img/image-slider/image1.jpg";
import art2 from "../src/img/image-slider/image2.jpg";
import art3 from "../src/img/image-slider/image3.jpg";
import art4 from "../src/img/image-slider/image4.jpg";
import art5 from "../src/img/image-slider/image5.jpg";
const images = [art1, art2, art3, art4, art5];

const slider = document.querySelector("#slider");
const sliderLine = document.querySelector("#slider-line");
const swipeLeft = document.querySelector("#swipe-left");
const swipeRight = document.querySelector("#swipe-right");

// слайдер

let count = 0;

function slaidImg(num) {
  sliderLine.innerHTML = `<img src=${images[count]} class="slider-image">`;
}

slaidImg(count);

function nextImage(num) {
  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }

  slaidImg(count);
}

function previousImage(num) {
  if (count > 0) {
    count--;
  } else {
    count = images.length - 1;
  }
  slaidImg(count);
}

swipeRight.addEventListener("click", () => {
  previousImage(count);
  prevDot(count);
});

swipeLeft.addEventListener("click", () => {
  nextImage(count);
  nextDot(count);
});

let checkAutoSlider = undefined;

function autoSlider() {
  if (!checkAutoSlider) {
    checkAutoSlider = setInterval(() => {
      nextImage();
      nextDot(count);
    }, 3000);
  }
}
slider.addEventListener("mouseover", () => {
  clearInterval(checkAutoSlider);
  checkAutoSlider = undefined;
  if (!checkAutoSlider) {
    slider.addEventListener("mouseleave", () => {
      autoSlider();
    });
  }
});

autoSlider();

// добавление точек
const sliderDots = function () {
  const addSliderDots = document.createElement("div");
  addSliderDots.className = "slider-dots";
  addDotsItems(addSliderDots);
  slider.appendChild(addSliderDots);
};
sliderDots();

function addDotsItems(element) {
  element.innerHTML = `<div class='slider-dots-item'></div>
<div class='slider-dots-item'></div>
<div class='slider-dots-item'></div>
<div class='slider-dots-item'></div>
<div class='slider-dots-item'></div>`;
}

const dotsItem = document.querySelectorAll(".slider-dots-item");

function activDot(num) {
  dotsItem[count].className = "slider-dots-item-active";
}

activDot(count);

function nextDot(count) {
  if (count <= images.length - 1 && count) {
    dotsItem[count].className = "slider-dots-item-active";
    dotsItem[count - 1].className = "slider-dots-item";
  } else {
    dotsItem[images.length - 1].className = "slider-dots-item";
    activDot();
  }
}

function prevDot(count) {
  if (count < images.length - 1 && count !== images.length - 1) {
    dotsItem[count].className = "slider-dots-item-active";
    dotsItem[count + 1].className = "slider-dots-item";
  } else {
    dotsItem[images.length - 1].className = "slider-dots-item-active";
    dotsItem[0].className = "slider-dots-item";
  }
}

dotsItem.forEach((e, i) => {
  e.addEventListener("click", () => {
    dotsItem.forEach((e) => (e.className = "slider-dots-item"));
    count = i;
    activDot(count);
    slaidImg(count);
  });
});

export {};
