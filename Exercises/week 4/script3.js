let titleByClass = document.
getElementsByClassName('headers')[0];
let titleByTag = document.
getElementsByTagName('h1')[0];
let titleBySelector = document.querySelector('.headers')
//console.log(titleBySelector);

let body = document.getElementsByTagName
('body')[0]
console.log(body.innerHTML);

let p = document.createElement('p')
p.textContent = 'hello world'
p.style.backgroundColor = 'blue'
p.style.width = 'fit-content'
p.style.padding = '16px'
body.appendChild(p)

let div = document.createElement('div')
div.innerHTML = '<h3 id="test">things</h3> <h4 id="headers">things2</h4>'

div.classList.add('things', 'fish')
div.classList.remove('fish')
div.classList.replace('thing', 'sarah')

body.appendChild(div)