
// using addEventListener
var img = document.querySelector("#image1");

img.addEventListener("mouseover", () => {
  img.src = "images/image1_2.jpg";
});

img.addEventListener("mouseout", () => {
    img.src = "images/image1.jpg";
})

// without using addEventListener
function changePic1() {
    document.getElementById("myImg").src = "images/image1_2.jpg";
       }
      function changePic22(){
       document.getElementById("myImg").src = "images/image1.jpg";
    }