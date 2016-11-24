var link = document.querySelector(".write-us");
var surface = document.querySelector(".feedback");
var close = document.querySelector(".cross-close-feedback");

var form = surface.querySelector("form");
var guest = surface.querySelector("[name=name]");
var email = surface.querySelector("[name=e-mail]");


var map = document.querySelector(".map-small");
var bigmap = document.querySelector(".map-big");
var closemap = document.querySelector(".cross-close-map");
var buyBtns = document.querySelectorAll(".action .buy");
var incart = document.querySelector(".goods-in-cart");
var closeincart = document.querySelector(".cross-close-cart");

var controls = document.querySelector(".slide-switch");    
var hideslide1 = document.querySelector(".show");
var slide1 = document.querySelector(".slide-1");
var slide2 = document.querySelector(".slide-2");

    
controls.addEventListener("click", function(event) {
  event.preventDefault();
  slide1.classList.remove("slide-1-show");
  slide1.classList.add("slide-1");
  slide2.classList.remove("slide-2");
  slide2.classList.add("slide-2-show"); 
  console.log("Переключение на 2Слайд");
});

if (link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    surface.classList.add("feedback-show");
    guest.focus();
    console.log("Клик по кнопке Заблудились? Напишите нам!");
    
  });
}


if (close) {
  close.addEventListener("click", function(event) {
    event.preventDefault();
    surface.classList.remove("feedback-show");
    surface.classList.remove("feedback-error");
    console.log("Клик по крестику закрытия формы");
  });
}

if (form) {
  form.addEventListener("submit", function(event) {
  if (!guest.value || !email.value) {
  event.preventDefault();
  console.log("Нужно ввести имя и почту");
    surface.classList.add("feedback-error");
  } else {
    localStorage.setItem("guest", guest.value);
  }
});
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (surface.classList.contains("feedback-show")) {
      surface.classList.remove("feedback-show");
    }    
  }
})

if (map) {
  map.addEventListener("click", function(event) {
    event.preventDefault();
    bigmap.classList.add("map-big-show");
    console.log("клик по маленькой карте");
  });
}
if (closemap) {
  closemap.addEventListener("click", function(event) {
    event.preventDefault();
    bigmap.classList.remove("map-big-show");
    console.log("Клик по крестику закрытия карты");
  });
}
if (closeincart) {
  closeincart.addEventListener("click", function(event) {
  event.preventDefault();
  incart.classList.remove("goods-in-cart-show");
  console.log("Клик по крестику закрытия формы");
});
}

for (var i = 0; i < buyBtns.length; i++) {
  buyBtns[i].addEventListener("click", function(event) {
    event.preventDefault();
    incart.classList.add("goods-in-cart-show");
    console.log("Клик по кнопке Купить");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (incart.classList.contains("goods-in-cart-show")) {
      incart.classList.remove("goods-in-cart-show");
    }    
  }
})