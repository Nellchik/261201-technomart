var link = document.querySelector(".write-us");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".cross-close-feedback");
var map = document.querySelector(".map-small");
var bigmap = document.querySelector(".map-big");
var closemap = document.querySelector(".cross-close-map");

var buy = document.querySelectorAll(".action .buy");
var incart = document.querySelector(".goods-in-cart");
var closeincart = document.querySelector(".cross-close-cart");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("feedback-show");
  console.log("Клик по кнопке Заблудились? Напишите нам!");
});
close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("feedback-show");
  console.log("Клик по крестику закрытия формы")
});
map.addEventListener("click", function (event) {
  event.preventDefault();
  bigmap.classList.add("map-big-show");
  console.log("клик по маленькой карте")
});
closemap.addEventListener("click", function (event) {
  event.preventDefault();
  bigmap.classList.remove("map-big-show");
  console.log("Клик по крестику закрытия карты")
});
buy.addEventListener("click", function (event) {
  event.preventDefault();
  incart.classList.add("goods-in-cart-show");
  console.log("Клик по кнопке Купить");
});

closeincart.addEventListener("click", function (event) {
  event.preventDefault();
  bigmap.classList.remove("goods-in-cart-show");
  console.log("Клик по крестику закрытия формы")
      
