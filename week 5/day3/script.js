let button = document.getElementsByTagName('button')[0]


function bob() {
    alert('hello');
    
}



let ul = document.getElementById('list');
let ilana = 1

function boris(element) {
    element.style.color = 'red'
}
function addLine() {
    let li = document.createElement('li')
    li.textContent = `line number ${ilana}`
    boris(li)
    ul.appendChild(li)
    ilana++
}


let button2 = document.getElementById('button')
button2.addEventListener('click', addLine)

let changeP = document.getElementById('onchange')
function fonchange(e) {
    changeP.textContent = e.target.value
}