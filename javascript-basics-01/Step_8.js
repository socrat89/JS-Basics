
// y_age(document.getElementById("age"));
// function y_age(x) {
//     if(x > 18) {
//        return alert("you are over 18");
//     } else {
//         return alert("you are under 18");
//     }
// }

var age = document.getElementById("validate") 
           
age.addEventListener("click", function() { 
var x =  document.getElementById("age").value;
if (x > 18){
    alert("you are over 18"); 
}
else {
    alert("you are under 18");
}
 });      