let personForm = document.forms.personform

console.log(personForm);

let nameInput = document.getElementById('name')
let nameResult = document.getElementById('nameResult')

nameInput.addEventListener('input', (Event)=>{
    //console.log(Event.target.Value);
    nameResult.textContent = Event.target.Value
})

personForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e);
})