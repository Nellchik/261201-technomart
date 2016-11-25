var link = document.querySelector(".write-us");
var surface = document.querySelector(".feedback");
var close = document.querySelector(".cross-close-feedback");
var form = document.querySelector("form");
var guest = document.querySelector("[name=name]");
var email = document.querySelector("[name=e-mail]");
var memory = localStorage.getItem("guest");
var map = document.querySelector(".map-small");
var bigmap = document.querySelector(".map-big");
var closemap = document.querySelector(".cross-close-map");
var buyBtns = document.querySelectorAll(".action .buy");
var incart = document.querySelector(".goods-in-cart");
var closeincart = document.querySelector(".cross-close-cart");
var btn2 = document.querySelector(".switch2");
var btn1 = document.querySelector(".switch1");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");
var dot1 = document.querySelector(".full");
var dot2 = document.querySelector(".empty");
var delivery = document.querySelector(".delivery");
var guarantee = document.querySelector(".guarantee");
var credit = document.querySelector(".credit");
var servslide1 = document.querySelector(".slide1");
var servslide2 = document.querySelector(".slide2");
var servslide3 = document.querySelector(".slide3");
if (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    surface.classList.add("feedback-show");
    if (memory) {
      guest.value = memory;
      email.focus();
    }
    else {
      guest.focus();
    }
    console.log("Клик по кнопке Заблудились? Напишите нам!");
  });
}
if (close) {
  close.addEventListener("click", function (event) {
    event.preventDefault();
    surface.classList.remove("feedback-show");
    surface.classList.remove("feedback-error");
    console.log("Клик по крестику закрытия формы");
  });
}
if (form) {
  form.addEventListener("submit", function (event) {
    if (!guest.value || !email.value) {
      event.preventDefault();
      console.log("Нужно ввести имя и почту");
      surface.classList.add("feedback-error");
    }
    else {
      localStorage.setItem("guest", guest.value);
    }
  });
}
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (surface.classList.contains("feedback-show")) {
      surface.classList.remove("feedback-show");
    }
  }
});
if (map) {
  map.addEventListener("click", function (event) {
    event.preventDefault();
    bigmap.classList.add("map-big-show");
    console.log("клик по маленькой карте");
  });
}
if (closemap) {
  closemap.addEventListener("click", function (event) {
    event.preventDefault();
    bigmap.classList.remove("map-big-show");
    console.log("Клик по крестику закрытия карты");
  });
}
if (closeincart) {
  closeincart.addEventListener("click", function (event) {
    event.preventDefault();
    incart.classList.remove("goods-in-cart-show");
    console.log("Клик по крестику закрытия формы");
  });
}
for (var i = 0; i < buyBtns.length; i++) {
  buyBtns[i].addEventListener("click", function (event) {
    event.preventDefault();
    incart.classList.add("goods-in-cart-show");
    console.log("Клик по кнопке Купить");
  });
}
window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (incart.classList.contains("goods-in-cart-show")) {
      incart.classList.remove("goods-in-cart-show");
    }
  }
});
if (btn2) {
  btn2.addEventListener("click", function (event) {
    event.preventDefault();
    slide1.classList.remove("show");
    slide1.classList.add("hide");
    slide2.classList.remove("hide");
    slide2.classList.add("show");
    dot1.classList.remove("full");
    dot1.classList.add("empty");
    dot2.classList.remove("empty");
    dot2.classList.add("full");
    console.log("Переключение на 2Слайд");
  });
}
if (btn1) {
  btn1.addEventListener("click", function (event) {
    event.preventDefault();
    slide2.classList.remove("show");
    slide2.classList.add("hide");
    slide1.classList.remove("hide");
    slide1.classList.add("show");
    dot1.classList.remove("empty");
    dot1.classList.add("full");
    dot2.classList.remove("full");
    dot2.classList.add("empty");
    console.log("Переключение на 1Слайд");
  });
}
if (delivery) {
  delivery.addEventListener("click", function (event) {
    event.preventDefault();
    servslide1.classList.remove("mask");
    servslide1.classList.add("exhibit");
    servslide2.classList.remove("exhibit");
    servslide2.classList.add("mask");
    servslide3.classList.remove("exhibit");
    servslide3.classList.add("mask");
    delivery.classList.remove("blue");
    delivery.classList.add("white");
    guarantee.classList.remove("white");
    guarantee.classList.add("blue");
    credit.classList.remove("white");
    credit.classList.add("blue");
  });
}
if (guarantee) {
  guarantee.addEventListener("click", function (event) {
    event.preventDefault();
    servslide1.classList.remove("exhibit");
    servslide1.classList.add("mask");
    servslide2.classList.remove("mask");
    servslide2.classList.add("exhibit");
    servslide3.classList.remove("exhibit");
    servslide3.classList.add("mask");
    guarantee.classList.remove("blue");
    guarantee.classList.add("white");
    delivery.classList.remove("white");
    delivery.classList.add("blue");
    credit.classList.remove("white");
    credit.classList.add("blue");
    console.log("Показать 2 слайд-гарантии");
  });
}
if (credit) {
  credit.addEventListener("click", function (event) {
    event.preventDefault();
    servslide1.classList.remove("exhibit");
    servslide1.classList.add("mask");
    servslide2.classList.remove("exhibit");
    servslide2.classList.add("mask");
    servslide3.classList.remove("mask");
    servslide3.classList.add("exhibit");
    credit.classList.remove("blue");
    credit.classList.add("white");
    guarantee.classList.remove("white");
    guarantee.classList.add("blue");
    delivery.classList.remove("white");
    delivery.classList.add("blue");
    console.log("Показать 3 слайд-кредит");
  });
}