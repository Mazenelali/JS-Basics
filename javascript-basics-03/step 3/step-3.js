
function colors_switch (color1,color2,color3,targetText) {
    color1.onclick = function(){
        targetText.style.color = "green"
    }
    color2.onclick = function(){
        targetText.style.color = "red"
    }
    color3.onclick = function(){
        targetText.style.color = "blue"
    }
}

let green = document.querySelector(".green")
let red = document.querySelector(".red")
let blue = document.querySelector(".blue")
let text = document.getElementById("text")

colors_switch(green ,red ,blue ,text)