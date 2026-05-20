const body = document.body
const Toggle = document.getElementById('toggle')

Toggle.addEventListener('click',function(){
    body.classList.toggle("dark-mode")
    if(Toggle.textContent === "Toggle Dark Mode"){
        Toggle.textContent = "Toggle White Mode"
    } else {
        Toggle.textContent = "Toggle Dark Mode"
    }


})