var css = document.querySelector("h3")
var helo = document.getElementById("helo")
var hello = document.getElementById("hello")
var body = document.getElementById("gradient")

function setGradient() {
    
}


helo.addEventListener("input", function(){
    body.style.background = 
    "linear-gradient(to right, "
    + helo.value
    + ", "
    + hello.value
    + ")";
})

hello.addEventListener("input", function(){
    body.style.background = 
    "linear-gradient(to left, "
    + hello.value
    + ", "
    + helo.value
    + ")";
})
