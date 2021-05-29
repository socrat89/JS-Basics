var div_text = document.querySelector("#text");
// var text1=document.querySelector("#text_a");
var yourName = document.querySelector("#name");

yourName.addEventListener("keyup", () => {
    div_text.textContent = yourName.value;
});

// input.addEventListener("keyup", () => {
//     text1.textContent = input.text;
// });

yourName.addEventListener("keydown", () => {
    div_text.textContent = yourName.value;
});