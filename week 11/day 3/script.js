[{
    model: 'ford focus',
    color: 'gold'
}]

[{
    model: "ford focus",
    color: "gold"
}]

// fetch()
fetch("https://api.artic.edu/api/v1/artworks/4")
.then((res)=>{
    return res.json()
})
.then((data)=>{
    try {
        console.log(data);
    } catch {

    }
    // console.log(data.info.license_text);
    // console.log(data.data.api_model);
    // console.log(data.data.classification_titles[1]);
})

fetch("./countries.json")
.then((res2)=>{
    return res2.json()
})
.then((data)=>{
    for(const iterator of data){
        let test = document.createElement('div')
        let img = document.createElement('img')
        let nameC = document.createElement('h3')
        let country = document.createElement('p')
        let capital = document.createElement('p')
        nameC.textContent = iterator.name
        country.textContent = iterator.capital
        capital.textContent = iterator.languages.join(',')
        img.setAttribute('src', iterator.image_link)


        div
        

        
    }
})


              