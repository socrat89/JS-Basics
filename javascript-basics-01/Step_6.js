
var calc = document.getElementById("validate") 
calc.addEventListener("click", function(){
var first =  document.getElementById("first_number").value;
var second = document.getElementById("second_number").value;
var result = first % second;
    alert("the remainder of  \n" +first +" / " + second + " is \n" + result); 
 });      
