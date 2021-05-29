function changePic(){
var img1 = document.querySelector("#image1");
var img2 = document.querySelector("#image2");
var img3 = document.querySelector("#image3");
var img4 = document.querySelector("#image4");
var img5 = document.querySelector("#image5");
// --------pic 1 -----------
img1.addEventListener("mouseover", () => {img1.src = "images/image1_2.jpg";});
img1.addEventListener("mouseout", () => {img1.src = "images/image1.jpg";});
// --------pic 2 -----------
img2.addEventListener("mouseover", () => {img2.src = "images/image2_2.jpg";});
img2.addEventListener("mouseout", () => {img2.src = "images/image2.jpg";});
// --------pic 3 -----------
img3.addEventListener("mouseover", () => {img3.src = "images/image3_2.jpg";});
img3.addEventListener("mouseout", () => {img3.src = "images/image3.jpg";});
// --------pic 4 -----------
img4.addEventListener("mouseover", () => {img4.src = "images/image4_2.jpg";});
img4.addEventListener("mouseout", () => {img4.src = "images/image4.jpg";});
// --------pic 5 -----------
img5.addEventListener("mouseover", () => {img5.src = "images/image5_2.jpg";});
img5.addEventListener("mouseout", () => {img5.src = "images/image5.jpg";});
}
changePic();