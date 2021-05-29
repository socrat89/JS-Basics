var your_name = document.querySelector("#name");
var your_surname = document.querySelector("#surname");
var your_city = document.querySelector("#city");
var resetButton = document.querySelector("button");

resetButton.addEventListener("click", () => {
    if(confirm("Clear All Fields?")){
        your_name.value = "";
        your_surname.value = "";
        your_city.value = "";
    }
})