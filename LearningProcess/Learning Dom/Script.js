const body = document.body
const div = document.createElement("div")
const ClickButton = document.getElementById("ClickButton")
let Toggle = true;

body.append(div)
div.innerText = "Hello Earthlings"

ClickButton.addEventListener('click', function() {
    if (Toggle) {
        ClickButton.innerText = "Normal"
        div.innerHTML = "<strong>Hello Earthlings</strong>"
        Toggle = false;
    }
    else {
        div.innerHTML = "Hello Earthlings"
        ClickButton.innerText = "Bold"
        Toggle = true;
    }
});