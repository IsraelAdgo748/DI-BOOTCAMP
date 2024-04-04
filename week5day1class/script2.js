// document.createElement('tag')
//   let newP = document.createElement('p')

// document.createTextNode('text')  
// let newTextNode = document.createTextNode('israel');

// `element.appendChild`
// newP.appendChild(newTextNode);
// document.body.appendChild(newP);

let title = document.querySelector('#title')

title.textContent = 'hello'
title.style.color ='red'

let body = document.getElementsByTagName('body')[0]
let p = document.createElement('p')
p.innerText = 'israel'
p.classList.add('text')
body.appendChild(p)

//title.remove()

let MyForm = document.forms.personform

let age = MyForm.element.age.value
console.log(MyForm);
