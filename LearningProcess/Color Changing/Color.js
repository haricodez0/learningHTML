const RedButton = document.getElementById("Red")
const GreenButton = document.getElementById("Green")
const BlueButton = document.getElementById("Blue")
const Body = document.body


RedButton.addEventListener('click',function(){
    Body.style.backgroundColor = "rgb(255,0,0)";
})
GreenButton.addEventListener('click',function(){
    Body.style.backgroundColor = "rgb(0,255,0)";
})
BlueButton.addEventListener('click',function(){
    Body.style.backgroundColor = "rgb(0,0,255)";
})