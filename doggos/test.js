const select = document.querySelector(".breeds");

for (var i = 1; i < 11; i++){
    const option = document.createElement("option");
    // <option></option>

    option.innerText = i; // propiedad de los elem del DOM q representa el valor del texto interno. Ej: en H1 de HTML Doggos. 
    //para modificar el innerText de las options. Si no, al no haber texto en HTML salen vacias.
    // <option>${i}</option>
    
    select.appendChild(option)
    /* <select>
       ...
       <option>${i}
       ...
       </select>
       */
}