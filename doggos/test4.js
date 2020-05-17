const BREEDS_URL = "https://dog.ceo/api/breed/hound/list";
const select = document.querySelector(".breeds");
/*
data = {
    prop1: valor1,
    prop2: [valor1, valor2]
}
Object.keys(data);
*/

fetch(BREEDS_URL)
   .then(function (response) {
       return response.json();
    })
    .then(function (data) { // devuelve promesa. Hasta aqui aprender. Data es el nombre que engloba el objeto. Message es el nombre de la propiedad que contiene el array
        const breedsArray = data.message; 

        breedsArray.forEach(function(dogName){
            const option = document.createElement("option");
            
            option.innerText = dogName;

            select.appendChild(option);
        })
    });