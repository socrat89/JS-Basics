
var txt_green = document.querySelector(".green");
var txt_red = document.querySelector(".red");
var txt_blue = document.querySelector(".blue");
var text = document.querySelector("#text");

txt_green.addEventListener("click", () => {text.style.color = "green";});
txt_red.addEventListener("click", () => {text.style.color = "red";});
txt_blue.addEventListener("click", () => {text.style.color = "blue";});