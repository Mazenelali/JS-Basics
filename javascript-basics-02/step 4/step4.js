
function reset(){
let a = confirm("you want to reset ?")
if (a==true){
  document.getElementById("name").value=" ";
  document.getElementById("surname").value=" ";
  document.getElementById("city").value=" ";
}
}
document.querySelector("button").onclick=function(){reset()}