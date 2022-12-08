let div= document.createElement("div")
 document.body.appendChild(div);
 div.id ="dii";
 function NAME(){
    let x = document.getElementById("name").value
    document.getElementById("dii").innerHTML= x
 }
 document.getElementById("name").onchange=function() {NAME()}