var pass = document.querySelector("#password");
var confirm = document.querySelector("#confirmation");
var test = document.querySelector("button");
let pass_border_style=pass.style.border;// using (let) to prevent any change
test.addEventListener("click", () => 
{
        if(confirm.value !== pass.value)
        {confirm.style.border = "1px solid red";// change the style into red border
        pass.style.border="1px solid red";
            //alert("the password doesn't confirm!!")
        }else{confirm.style.border = pass_border_style;//return to the start style
            pass.style.border=pass_border_style;
        }
         
        
})

