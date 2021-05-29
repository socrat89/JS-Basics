var calc = document.getElementById("validate") 
           
calc.addEventListener("click", function(){
var size =  document.getElementById("shoe_size").value;
var year = document.getElementById("year").value;
function calc_function(x,y){
var result = ((((x*2)+5)*50)- y)+1766;
return result;
}
    alert(calc_function(size,year)); 
 });     