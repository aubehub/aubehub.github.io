const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
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
    .then(function (data) {
        const breedsObject = data.message; 
        const breedsArray = Object.keys(breedsObject); //pass object and give back an array

        breedsArray.forEach(function(dogName){
            const option = document.createElement("option");
            
            option.innerText = dogName;

            select.appendChild(option);
        })
    });