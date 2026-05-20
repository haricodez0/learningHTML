const Plus = document.getElementById("Plus")
const Minus = document.getElementById("Minus")
const NumberDisplay = document.getElementById("Number-Display")
const Reset = document.getElementById("reset")
let CurrentNumber = 0;

Plus.addEventListener('click',function(){
    CurrentNumber += 1;

    NumberDisplay.textContent = CurrentNumber;
})
Minus.addEventListener('click',function(){
    if (CurrentNumber > 0) {
        CurrentNumber -= 1;
    NumberDisplay.textContent = CurrentNumber;
        
    }
})
Reset.addEventListener('click',function(){
    CurrentNumber = 0;
    NumberDisplay.textContent = CurrentNumber;
})