let breeds =[]

function getBreeds() { 
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    return fetch(imgUrl) 
    .then(response => response.json())
    .then (response => {
        //console.log("response", response.message)
        const dogImageContainer = document.getElementById("dog-image-container")
        response.message.forEach(url => {
            const img  = document.createElement("img")
            img.src = url
            dogImageContainer.appendChild(img)
        })
    })
}

function getDogBreedNames() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(response => response.json())
    .then(response => {
       breeds = Object.keys(response.message)
       addBreedNamesToDom(breeds)
       })
}


function addBreedNamesToDom(breeds){
  const ul = document.querySelector("#dog-breeds")
  breeds.map(breed => {
    const li = document.createElement("li")
    li.textContent = breed
    ul.append(li)
   }) 
}

document.addEventListener("click", event => {
if (event.target.matches("li")) {
    event.target.style.color = "red"
}
})

document.addEventListener("change", event => {
    if(event.target.matches("#breed-dropdown")) {
        const ul = document.querySelector["#dog-breeds"]
         ul.innerHTML = ""
         const filterBreeds = breeds.filter (breed => breed[0] === event.target.value)
        addBreedNamesToDom(filterBreeds)


    }     
})


getBreeds();
getDogBreedNames();
// console.log('%c HI', 'color: firebrick')

