
function show_hide() {
    var click_show = document.querySelector("#show");
    var click_hide = document.querySelector("#hide");
    var text = document.querySelector("#texte");
    click_show.addEventListener("click", () => { text.style.display = "block";})
    click_hide.addEventListener("click", () => {text.style.display = "none";})
}

show_hide();