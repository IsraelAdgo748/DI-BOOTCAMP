function sayHi(phrase, who) {
    alert( phrase + ', ' + who );
  }
  
  setTimeout(sayHi, 2000, "Hello", "World");


function addParagraph() {
    let container = document.getElementById("container");
    let paragraph = document.createElement("p");
    paragraph.textContent = "Hello World";
    container.appendChild(paragraph);
  }
  
  setTimeout(addParagraph, 2000);
  