let x = document.getElementById("password")
let y = document.getElementById("confirmation")
let z = document.querySelector("button") 

    z.onclick=function () {
    if(x.value!=y.value) {
    x.style.border="2px solid red"
    y.style.border="2px solid red"
    }
    }
