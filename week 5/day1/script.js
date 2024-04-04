document.getElementById('test').textContent = "Hello";
let title2 =document.getElementsByTagName("h1")[1]
title2.textContent = "hello sarah"

let state = false
function changeColor() {   
    if (state) {
        title2.style.color = "blue"
        state = false
    } else {
        title2.style.color = "yellow"
        state = true
    }
}
