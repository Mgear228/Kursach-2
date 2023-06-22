const slider = document.querySelector("#slider");
const sliderLine = document.querySelector("#slider-line");
const swipeLeft = document.querySelector("#swipe-left");
const swipeRight = document.querySelector("#swipe-right");

const art1 = "./src/img/image-slider/image1.jpg";
const art2 = "./src/img/image-slider/image2.jpg";
const art3 = "./src/img/image-slider/image3.jpg";
const art4 = "./src/img/image-slider/image4.jpg";
const art5 = "./src/img/image-slider/image5.jpg";

const images = [art1, art2, art3, art4, art5];

let count = 0;

const slaidImg = function () {
  sliderLine.innerHTML = `<img src=${images[count]} class="slider-image">`;
};

slaidImg();

function nextImage() {
  if (count < images.length - 1) {
    count++;
  } else {
    count = 0;
  }

  slaidImg();
}

function previousImage() {
  if (count > 0) {
    count--;
  } else {
    count = images.length - 1;
  }
  slaidImg();
}

swipeRight.addEventListener("click", () => {
  nextImage();
});

swipeLeft.addEventListener("click", () => {
  previousImage();
});

let checkAutoSlider = undefined;

function autoSlider() {
  if (!checkAutoSlider) {
    checkAutoSlider = setInterval(() => {
      nextImage();
    }, 4000);
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
export {};
