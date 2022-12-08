function newimage(){
    document.getElementById("image1").src="images/image1_2.jpg"
 
}
document.getElementById("image1").onmouseover=function() {newimage()}
 

function lastimage(){
    document.getElementById("image1").src="images/image1.jpg"
}
document.getElementById("image1").onmouseout=function() {newimage()}