function infoAboutPerson(personName, personAge, personFavoriteColor) {
    let me2 = `you name is ${personName} you are ${personAge} years old.
    your favorite color is ${personFavoriteColor}`
    //console.log(me2);
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")



function infoAboutMe(name, age, hobbies) {
    let me = `my name is ${name} my age ${age} i like to ${hobbies}`
    //console.log(me);
}

infoAboutMe('israel', 30, 'watch tv')

function calculateTip() {
    let bill = number(prompt('how much moneys'))
    let tip;
    if (bill<50) {
        tip = bill *0.2
    } else if (bill >= 50 && bill <= 200) {
        tip = bill * 0.15
    } else if(bill >200) {
        tip = bill * 0.1
    } else {
        console.log('not a number');
    }    
     console.log(bill + tip);
}    
    
        

